const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contact: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the User who owns the business
    branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }], // Reference to branches
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
