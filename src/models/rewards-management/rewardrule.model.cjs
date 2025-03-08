const mongoose = require("mongoose");

const rewardRuleSchema = new mongoose.Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    }, // Linked to business
    pointsExpiryDays: { type: Number, default: 365 }, // Default expiration period (1 year)
    earnRate: { type: Number, required: true }, // Points earned per ₹ spent (e.g., 1 point per ₹100)
    redeemThreshold: { type: Number, required: true }, // Minimum points required for redemption
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.RewardRule || mongoose.model("RewardRule", rewardRuleSchema);
