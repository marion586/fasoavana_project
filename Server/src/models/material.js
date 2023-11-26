import mongoose from "mongoose";

const { Schema } = mongoose;

const materialSchema = new Schema(
  {
    user: {
      type: Object,
      required: false,
    },
    id_boite: {
      type: String,
      required: false,
      default: "",
    },

    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    marque: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      default: "disponible",
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Material", materialSchema);
