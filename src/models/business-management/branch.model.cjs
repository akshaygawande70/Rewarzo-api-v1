const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contact: String,
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    }, // Reference to the parent business
  },
  { timestamps: true }
);

module.exports = mongoose.model("Branch", branchSchema);
