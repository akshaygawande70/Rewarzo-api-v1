const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    action: { type: String, enum: ["earn", "redeem"], required: true }, // Type of activity
    points: { type: Number, required: true },
    description: String, // E.g., "Purchased product X"
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);
