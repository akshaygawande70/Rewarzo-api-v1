import rewardRuleRepository from "../../repositories/rewards-management/rewardrule.repository.js"; // Import reward rule repository

const configureRewardRules = async (businessId, rulesData) => {
  return await rewardRuleRepository.upsertRewardRule(businessId, rulesData);
};

const getRewardRules = async (businessId) => {
  const rules = await rewardRuleRepository.findRewardRuleByBusiness(businessId);
  if (!rules) throw new Error("Reward rules not found for this business");
  return rules;
};

const updateRewardRules = async (id, updates) => {
  return await rewardRuleRepository.updateRewardRule(id, updates);
};

const deleteRewardRules = async (id) => {
  return await rewardRuleRepository.deleteRewardRule(id);
};

export default {
  configureRewardRules,
  getRewardRules,
  updateRewardRules,
  deleteRewardRules,
};
