import express from "express";
import rewardRuleController from "../../controllers/rewards-management/rewardrule.controller.js"; // Import reward rule controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import auth middleware
const router = express.Router();

// Configure reward rules
router.post("/configure", authMiddleware, rewardRuleController.configureRules);

// Get reward rules for a business
router.get("/:businessId", authMiddleware, rewardRuleController.getRules);

// Update reward rules
router.put("/:id", authMiddleware, rewardRuleController.updateRules);

// Delete reward rules
router.delete("/:id", authMiddleware, rewardRuleController.deleteRules);

export default router;
