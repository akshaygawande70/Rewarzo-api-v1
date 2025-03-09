import rewardService from "../../services/rewards-management/reward.service.js"; // Import reward service

// Earn points
const earnPoints = async (req, res) => {
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

// Redeem points
const redeemPoints = async (req, res) => {
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

// List rewards
const listRewards = async (req, res) => {
  try {
    const rewards = await rewardService.getAllRewards();
    res.json(rewards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get reward details
const getReward = async (req, res) => {
  try {
    const reward = await rewardService.getRewardById(req.params.id);
    res.json(reward);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update reward details
const updateReward = async (req, res) => {
  try {
    const updates = req.body;
    const updatedReward = await rewardService.updateRewardDetails(
      req.params.id,
      updates
    );
    res.json({
      message: "Reward updated successfully",
      reward: updatedReward,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a reward
const deleteReward = async (req, res) => {
  try {
    await rewardService.deleteReward(req.params.id);
    res.json({ message: "Reward deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  earnPoints,
  redeemPoints,
  listRewards,
  getReward,
  updateReward,
  deleteReward,
};
