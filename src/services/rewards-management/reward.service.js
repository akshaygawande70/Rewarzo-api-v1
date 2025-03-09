import rewardRepository from "../../repositories/rewards-management/reward.repository.js"; // Import reward repository
import activityRepository from "../../repositories/rewards-management/activity.repository.js"; // Import activity repository
import rewardRuleRepository from "../../repositories/rewards-management/rewardrule.repository.js"; // Import reward rule repository
import User from "../../models/user-management/user.model.js"; // Import User model

const earnPoints = async (userId, businessId, amountSpent) => {
  const rules = await rewardRuleRepository.findRewardRuleByBusiness(businessId);
  if (!rules) throw new Error("Reward rules not configured for this business");

  const points = Math.floor(amountSpent / rules.earnRate);

  await activityRepository.createActivity({
    user: userId,
    business: businessId,
    action: "earn",
    points,
    description: `Spent ₹${amountSpent}`,
  });

  const user = await User.findById(userId);
  user.points += points;
  await user.save();

  return user.points;
};

const redeemPoints = async (userId, businessId, rewardId) => {
  const reward = await rewardRepository.findRewardById(rewardId);
  if (!reward) throw new Error("Reward not found");

  const rules = await rewardRuleRepository.findRewardRuleByBusiness(businessId);
  if (!rules) throw new Error("Reward rules not configured for this business");

  if (reward.pointsRequired < rules.redeemThreshold) {
    throw new Error("Reward does not meet the redemption threshold");
  }

  const user = await User.findById(userId);
  if (user.points < reward.pointsRequired) {
    throw new Error("Insufficient points to redeem this reward");
  }

  user.points -= reward.pointsRequired;
  await user.save();

  await activityRepository.createActivity({
    user: userId,
    business: businessId,
    action: "redeem",
    points: reward.pointsRequired,
    description: `Redeemed reward: ${reward.name}`,
  });

  return { message: "Reward redeemed successfully", pointsLeft: user.points };
};

const listActivities = async (userId) => {
  return await activityRepository.listActivitiesByUser(userId);
};

export default {
  earnPoints,
  redeemPoints,
  listActivities,
};
