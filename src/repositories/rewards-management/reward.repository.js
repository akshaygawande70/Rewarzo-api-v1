import Reward from "../../models/rewards-management/reward.model.js"; // Import Reward model

const createReward = async (rewardData) => {
  return await Reward.create(rewardData);
};

const findRewardById = async (rewardId) => {
  return await Reward.findById(rewardId);
};

const listRewardsByBusiness = async (businessId) => {
  return await Reward.find({ business: businessId });
};

export default {
  createReward,
  findRewardById,
  listRewardsByBusiness,
};
