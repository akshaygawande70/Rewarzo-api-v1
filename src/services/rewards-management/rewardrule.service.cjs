const rewardRuleRepository = require("../../repositories/rewards-management/rewardrule.repository.cjs"); // Import reward rule repository

const configureRewardRules = async (businessId, rulesData) => {
  return await rewardRuleRepository.upsertRewardRule(businessId, rulesData);
};

const getRewardRules = async (businessId) => {
  const rules = await rewardRuleRepository.findRewardRuleByBusiness(businessId);
  if (!rules) throw new Error("Reward rules not found for this business");
  return rules;
};

module.exports = { configureRewardRules, getRewardRules };
