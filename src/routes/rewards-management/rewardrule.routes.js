import express from "express";
import rewardRuleController from "../../controllers/rewards-management/rewardrule.controller.js"; // Import reward rule controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import auth middleware
const router = express.Router();

// Configure reward rules
//Add Swagger annotations
/**
 * @swagger
 * /rewards/rules/configure:
 *   post:
 *     summary: Configure reward rules
 *     description: Configure reward rules for a business
 *     tags:
 *       - Reward Rules
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RewardRule'
 *     responses:
 *       200:
 *         description: Reward rules configured successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RewardRule'
 *       400:
 *         description: Error configuring reward rules
 */
router.post("/configure", authMiddleware, rewardRuleController.configureRules);

// Get reward rules for a business
//Add Swagger annotations
/**
 * @swagger
 * /rewards/rules/{businessId}:
 *   get:
 *     summary: Get reward rules
 *     description: Get reward rules for a business
 *     tags:
 *       - Reward Rules
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         description: Business ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reward rules
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RewardRule'
 *       404:
 */
router.get("/:businessId", authMiddleware, rewardRuleController.getRules);

// Update reward rules
//Add Swagger annotations
/**
 * @swagger
 * /rewards/rules/{id}:
 *   put:
 *     summary: Update reward rules
 *     description: Update reward rules for a business
 *     tags:
 *       - Reward Rules
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reward Rule ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RewardRule'
 *     responses:
 *       200:
 *         description: Reward rules updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RewardRule'
 *       400:
 *         description: Error updating reward rules
 */
router.put("/:id", authMiddleware, rewardRuleController.updateRules);

// Delete reward rules
//Add Swagger annotations
/**
 * @swagger
 * /rewards/rules/{id}:
 *   delete:
 *     summary: Delete reward rules
 *     description: Delete reward rules for a business
 *     tags:
 *       - Reward Rules
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reward Rule ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reward rules deleted successfully
 *       404:
 */
router.delete("/:id", authMiddleware, rewardRuleController.deleteRules);

export default router;
