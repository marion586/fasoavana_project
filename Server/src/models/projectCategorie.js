import mongoose from "mongoose";

const { Schema } = mongoose;

const categorieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Categorie", categorieSchema);
