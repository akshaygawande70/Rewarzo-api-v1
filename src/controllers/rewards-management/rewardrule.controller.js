import rewardRuleService from "../../services/rewards-management/rewardrule.service.js"; // Import reward rule service

// Configure Reward Rules
const configureRules = async (req, res) => {
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
const getRules = async (req, res) => {
  try {
    const businessId = req.params.businessId;

    const rules = await rewardRuleService.getRewardRules(businessId);

    res.json(rules);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Update Reward Rules
const updateRules = async (req, res) => {
  try {
    const { pointsExpiryDays, earnRate, redeemThreshold } = req.body;
    const rules = await rewardRuleService.updateRewardRules(req.params.id, {
      pointsExpiryDays,
      earnRate,
      redeemThreshold,
    });

    res.json({ message: "Reward rules updated successfully", rules });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Reward Rules
const deleteRules = async (req, res) => {
  try {
    const rules = await rewardRuleService.deleteRewardRules(req.params.id);

    res.json({ message: "Reward rules deleted successfully", rules });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  configureRules,
  getRules,
  updateRules,
  deleteRules,
};
