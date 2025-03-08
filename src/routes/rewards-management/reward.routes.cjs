const express = require("express");
const router = express.Router();
const rewardController = require("../../controllers/rewards-management/reward.controller.cjs"); // Import reward controller
const authMiddleware = require("../../middlewares/auth.middleware.cjs"); // Import auth middleware

// Earn points
router.post("/earn", authMiddleware, rewardController.earnPoints);

// Redeem points
router.post("/redeem", authMiddleware, rewardController.redeemPoints);

module.exports = router;
