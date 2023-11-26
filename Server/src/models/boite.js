import mongoose from "mongoose";

const { Schema } = mongoose;

const bottleSchema = new Schema(
  {
    id_etiquete: {
      type: String,
      required: false,
      default: "",
    },

    reference: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Bottle", bottleSchema);
