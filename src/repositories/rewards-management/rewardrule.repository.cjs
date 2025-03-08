const RewardRule = require("../../models/rewards-management/rewardrule.model.cjs"); // Import RewardRule model

const upsertRewardRule = async (businessId, rulesData) => {
  return await RewardRule.findOneAndUpdate(
    { business: businessId },
    { ...rulesData, business: businessId },
    { new: true, upsert: true }
  );
};

const findRewardRuleByBusiness = async (businessId) => {
  return await RewardRule.findOne({ business: businessId });
};

module.exports = {
  upsertRewardRule,
  findRewardRuleByBusiness,
};
