import mongoose from "mongoose";

const { Schema } = mongoose;

const investSchema = new Schema(
  {
    user: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },

    apport_id: {
      type: String,
      required: true,
    },

    DatePayment: {
      type: String,
      trim: true,
      required: true,
    },
    amount: {
      type: Number,
      trim: true,
      required: true,
    },
    imageSignature: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status_invest: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_paid: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_accepted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Invest", investSchema);
