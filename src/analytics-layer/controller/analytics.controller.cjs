const analyticsService = require("../service/analytics.service.cjs"); // Import the analytics service

// Get customer engagement analytics
exports.getCustomerEngagement = async (req, res) => {
  try {
    const { businessId } = req.params;

    const engagementData = await analyticsService.customerEngagementAnalytics(
      businessId
    );

    res.json(engagementData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get reward insights analytics
exports.getRewardInsights = async (req, res) => {
  try {
    const { businessId } = req.params;

    const rewardData = await analyticsService.rewardInsightsAnalytics(
      businessId
    );

    res.json(rewardData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get group engagement analytics
exports.getGroupEngagement = async (req, res) => {
  try {
    const { businessId } = req.params;

    const groupData = await analyticsService.groupEngagementAnalytics(
      businessId
    );

    res.json(groupData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
