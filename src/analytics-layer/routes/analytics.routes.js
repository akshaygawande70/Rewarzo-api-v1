import express from "express";
import analyticsController from "../controller/analytics.controller.js"; // Import the branch controller
const router = express.Router();

import authMiddleware from "../../middlewares/auth.middleware.js"; // Import the auth middleware

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

export default router;
