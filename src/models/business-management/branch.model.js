import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contact: String,
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    }, // Parent business reference
  },
  { timestamps: true }
);

export default mongoose.models.Branch || mongoose.model("Branch", branchSchema);
