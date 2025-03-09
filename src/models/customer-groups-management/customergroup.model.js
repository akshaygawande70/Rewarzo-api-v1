import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    }, // Linked to business
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Customers in the group
    mpocs: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Multiple Points of Contact (MPOCs)
  },
  { timestamps: true }
);

export default mongoose.models.Group || mongoose.model("Group", groupSchema);
