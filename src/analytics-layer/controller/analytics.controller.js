import analyticsService from "../service/analytics.service.js"; // Import the analytics service

// Get customer engagement analytics
const getCustomerEngagement = async (req, res) => {
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
const getRewardInsights = async (req, res) => {
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
const getGroupEngagement = async (req, res) => {
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

export default {
  getCustomerEngagement,
  getRewardInsights,
  getGroupEngagement,
};
