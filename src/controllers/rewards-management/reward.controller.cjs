const rewardService = require("../../services/rewards-management/reward.service.cjs"); // Import reward service

exports.earnPoints = async (req, res) => {
  try {
    const { userId, businessId, points, description } = req.body;

    const updatedPoints = await rewardService.earnPoints(
      userId,
      businessId,
      points,
      description
    );

    res.json({ message: "Points earned successfully", points: updatedPoints });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.redeemPoints = async (req, res) => {
  try {
    const { userId, businessId, rewardId } = req.body;

    const result = await rewardService.redeemPoints(
      userId,
      businessId,
      rewardId
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
