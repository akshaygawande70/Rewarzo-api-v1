const Activity = require("../../models/rewards-management/activity.model.cjs"); // Import the Activity model
const Group = require("../../models/customer-groups-management/customergroup.model.cjs"); // Import the Activity model
const mongoose = require("mongoose"); // Import mongoose

// Customer engagement analytics
const customerEngagementAnalytics = async (businessId) => {
  const result = await Activity.aggregate([
    { $match: { business: mongoose.Types.ObjectId(businessId) } },
    {
      $group: {
        _id: "$user", // Group by user ID
        totalPointsEarned: {
          $sum: { $cond: [{ $eq: ["$action", "earn"] }, "$points", 0] },
        },
        totalPointsRedeemed: {
          $sum: { $cond: [{ $eq: ["$action", "redeem"] }, "$points", 0] },
        },
      },
    },
    {
      $addFields: {
        remainingPoints: {
          $subtract: ["$totalPointsEarned", "$totalPointsRedeemed"],
        },
      },
    },
    { $sort: { totalPointsEarned: -1 } }, // Sort customers by engagement
  ]);

  return result;
};

// Reward insights analytics
const rewardInsightsAnalytics = async (businessId) => {
  const result = await Activity.aggregate([
    {
      $match: {
        business: mongoose.Types.ObjectId(businessId),
        action: "redeem",
      },
    },
    {
      $group: {
        _id: "$description", // Group by reward name
        totalRedemptions: { $sum: 1 },
        totalPointsRedeemed: { $sum: "$points" },
      },
    },
    { $sort: { totalRedemptions: -1 } }, // Most redeemed rewards first
  ]);

  return result;
};

// Group engagement analytics
const groupEngagementAnalytics = async (businessId) => {
  const groups = await Group.find({
    business: mongoose.Types.ObjectId(businessId),
  }).populate("members");
  const groupStats = await Promise.all(
    groups.map(async (group) => {
      const stats = await Activity.aggregate([
        {
          $match: { user: { $in: group.members.map((member) => member._id) } },
        },
        {
          $group: {
            _id: null,
            totalPointsEarned: {
              $sum: { $cond: [{ $eq: ["$action", "earn"] }, "$points", 0] },
            },
            totalPointsRedeemed: {
              $sum: { $cond: [{ $eq: ["$action", "redeem"] }, "$points", 0] },
            },
          },
        },
      ]);
      return {
        groupName: group.name,
        groupId: group._id,
        totalPointsEarned: stats[0]?.totalPointsEarned || 0,
        totalPointsRedeemed: stats[0]?.totalPointsRedeemed || 0,
      };
    })
  );
  return groupStats;
};

module.exports = {
  customerEngagementAnalytics,
  rewardInsightsAnalytics,
  groupEngagementAnalytics,
};
