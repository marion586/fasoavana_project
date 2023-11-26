import mongoose from "mongoose";

const { Schema } = mongoose;

const etiquetteSchema = new Schema(
  {
    id_boite: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      default: "disponible",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Etiquette", etiquetteSchema);
