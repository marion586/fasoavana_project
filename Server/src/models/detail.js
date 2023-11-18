import mongoose from "mongoose";

const { Schema } = mongoose;

const detailSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    project_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Detail", detailSchema);
