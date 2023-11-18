import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      unique: false,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      unique: false,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
    },
    tel: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    typeUser: {
      type: String,
      trim: true,
      required: true,
    },
    customerStripeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("User", userSchema);
