const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    pointsRequired: { type: Number, required: true },
    expiresAt: Date, // Expiration date of the reward
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    }, // Reference to the business
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Reward || mongoose.model("Reward", rewardSchema);
