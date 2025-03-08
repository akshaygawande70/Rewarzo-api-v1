const rewardRuleService = require("../../services/rewards-management/rewardrule.service.cjs"); // Import reward rule service

// Configure Reward Rules
exports.configureRules = async (req, res) => {
  try {
    const { businessId, pointsExpiryDays, earnRate, redeemThreshold } =
      req.body;

    const rules = await rewardRuleService.configureRewardRules(businessId, {
      pointsExpiryDays,
      earnRate,
      redeemThreshold,
    });

    res.json({ message: "Reward rules configured successfully", rules });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Reward Rules
exports.getRules = async (req, res) => {
  try {
    const businessId = req.params.businessId;

    const rules = await rewardRuleService.getRewardRules(businessId);

    res.json(rules);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
