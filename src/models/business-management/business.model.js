import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contact: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the user (Admin)
    branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }], // Linked branches
    spoc: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Assigned SPOC for the business
  },
  { timestamps: true }
);

export default mongoose.model("Business", businessSchema);
