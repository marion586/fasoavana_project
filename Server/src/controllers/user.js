import User from "../models/user.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

import { stripe } from "../Utils/stripe.js";
import { validationResult } from "express-validator";
export const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    image,
    typeUser,
    tel,
    address,
  } = req.body;
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    const errors = validationError.array().map((error) => {
      return {
        msg: error.msg,
      };
    });
    return res.json({ errors, data: null });
  }

  const user = await User.findOne({ email });
  if (user) {
    return res.json({
      errors: [
        {
          msg: "Email dejà utilisé",
        },
      ],
      data: null,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(process.env.STRIPE_SECRET_KEY);
  const customer = await stripe.customers.create(
    {
      email,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  const newUser = await User.create({
    firstName,
    lastName,
    typeUser,
    image,
    email,
    password: hashedPassword,
    customerStripeId: customer.id,
    tel,
    address,
  });

  console.log(process.env.JWT_SECRET);
  const token = await JWT.sign(
    { email: newUser.email },
    process.env.JWT_SECRET,
    {
      expiresIn: 360000,
    }
  );
  res.json({
    errors: [],
    data: {
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        typeUser: newUser.typeUser,
        image: newUser.image,
        tel: newUser.tel,
        address: newUser.address,
        stripeCustomerId: customer.id,
      },
    },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      errors: {
        msg: "Invalids credentials",
      },
      data: null,
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({
      errors: [
        {
          msg: "Invalid password",
        },
      ],
      data: null,
    });
  }
  const token = await JWT.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: 3600000,
  });
  return res.json({
    errors: [],
    data: {
      token,
      user,
    },
  });
};
export const getUser = async (req, res) => {
  try {
    const data = await User.find();
    return res.status(200).json({
      error: [],
      data,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "donné n'est existe" });

    const deletedUser = await User.deleteOne({ _id: req.params.id });
    return res.status(201).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
