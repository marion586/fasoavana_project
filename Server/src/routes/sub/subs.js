import express from "express";

import User from "../../models/user.js";
import { stripe } from "../../Utils/stripe.js";

const router = express.Router();

router.get("/prices", async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });
  return res.json(prices);
});

router.post("/session", async (req, res) => {
  const user = await User.findOne({ email: req.body.user });
  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/postule-success",
      cancel_url: "http://localhost:3000/",
      customer: user?.customerStripeId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );
  res.json(session);
});

router.post("/session-details", async (req, res) => {
  const user = await User.findOne({ email: req.body.user });
  try {
    const session = await stripe.checkout.sessions.create(
      {
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
          },
        ],
        success_url: "http://localhost:3000/details-success",
        cancel_url: "http://localhost:3000/",
        customer: user?.customerStripeId,
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );
    res.json(session);
  } catch (error) {
    throw error.message;
  }
});

router.post("/session-paiement", async (req, res) => {
  const user = await User.findOne({ email: req.body.user });
  try {
    const session = await stripe.checkout.sessions.create(
      {
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
          },
        ],
        success_url: "http://localhost:3000/project-payment-success",
        cancel_url: "http://localhost:3000/",
        customer: user?.customerStripeId,
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );
    res.json(session);
  } catch (error) {
    throw error.message;
  }
});

export default router;
