import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    user: {
      type: Object,
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },
    categorie: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    amountMin: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "En attente",
    },
    isPotuled: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Project", projectSchema);
