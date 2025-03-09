const express = require("express");
const router = express.Router();
const analyticsController = require("../controller/analytics.controller.cjs"); // Import the branch controller

const authMiddleware = require("../../middlewares/auth.middleware.cjs"); // Import the auth middleware

router.get(
  "/customer-engagement/:businessId",
  authMiddleware,
  analyticsController.getCustomerEngagement
);

router.get(
  "/reward-insights/:businessId",
  authMiddleware,
  analyticsController.getRewardInsights
);

router.get(
  "/group-engagement/:businessId",
  authMiddleware,
  analyticsController.getGroupEngagement
);

module.exports = router;
