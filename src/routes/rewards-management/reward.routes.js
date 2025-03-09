import express from "express";
import rewardController from "../../controllers/rewards-management/reward.controller.js"; // Import reward controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import auth middleware
const router = express.Router();

// Earn points
router.post("/earn", authMiddleware, rewardController.earnPoints);

// Redeem points
router.post("/redeem", authMiddleware, rewardController.redeemPoints);

// List rewards
router.get("/all", authMiddleware, rewardController.listRewards);

// Get reward details
router.get("/:id", authMiddleware, rewardController.getReward);

// Update reward details
router.put("/:id", authMiddleware, rewardController.updateReward);

// Delete a reward
router.delete("/:id", authMiddleware, rewardController.deleteReward);

export default router;
