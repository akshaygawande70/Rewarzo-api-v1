const Reward = require("../../models/rewards-management/reward.model.cjs"); // Import Reward model

const createReward = async (rewardData) => {
  return await Reward.create(rewardData);
};

const findRewardById = async (rewardId) => {
  return await Reward.findById(rewardId);
};

const listRewardsByBusiness = async (businessId) => {
  return await Reward.find({ business: businessId });
};

module.exports = {
  createReward,
  findRewardById,
  listRewardsByBusiness,
};
