const express = require("express");
const router = express.Router();
const rewardRuleController = require("../../controllers/rewards-management/rewardrule.controller.cjs"); // Import reward rule controller
const authMiddleware = require("../../middlewares/auth.middleware.cjs"); // Import auth middleware

// Configure reward rules
router.post("/configure", authMiddleware, rewardRuleController.configureRules);

// Get reward rules for a business
router.get("/:businessId", authMiddleware, rewardRuleController.getRules);

module.exports = router;
