import express from "express";
import rewardController from "../../controllers/rewards-management/reward.controller.js"; // Import reward controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import auth middleware
const router = express.Router();

// Earn points
//Add Swagger annotations
/**
 * @swagger
 * /rewards/earn:
 *   post:
 *     summary: Earn points
 *     description: Earn points for a reward
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reward'
 *     responses:
 *       200:
 *         description: Points earned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reward'
 *       400:
 *         description: Error earning points
 */
router.post("/earn", authMiddleware, rewardController.earnPoints);

// Redeem points
//Add Swagger annotations
/**
 * @swagger
 * /rewards/redeem:
 *   post:
 *     summary: Redeem points
 *     description: Redeem points for a reward
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reward'
 *     responses:
 *       200:
 *         description: Points redeemed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reward'
 *       400:
 *         description: Error redeeming points
 */
router.post("/redeem", authMiddleware, rewardController.redeemPoints);

// List rewards
//Add Swagger annotations
/**
 * @swagger
 * /rewards/all:
 *   get:
 *     summary: Get all rewards
 *     description: Get all rewards
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of rewards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reward'
 *       400:
 *         description: Error getting rewards
 */
router.get("/all", authMiddleware, rewardController.listRewards);

// Get reward details
//Add Swagger annotations
/**
 * @swagger
 * /rewards/{id}:
 *   get:
 *     summary: Get a reward
 *     description: Get details of a reward by ID
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reward ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reward details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reward'
 *       404:
 *         description: Reward not found
 */
router.get("/:id", authMiddleware, rewardController.getReward);

// Update reward details
//Add Swagger annotations
/**
 * @swagger
 * /rewards/{id}:
 *   put:
 *     summary: Update a reward
 *     description: Update details of a reward by ID
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reward ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reward'
 *     responses:
 *       200:
 *         description: Reward updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reward'
 *       400:
 *         description: Error updating reward
 */
router.put("/:id", authMiddleware, rewardController.updateReward);

// Delete a reward
//Add Swagger annotations
/**
 * @swagger
 * /rewards/{id}:
 *   delete:
 *     summary: Delete a reward
 *     description: Delete a reward by ID
 *     tags:
 *       - Rewards
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Reward ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reward deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reward'
 *       400:
 *         description: Error deleting reward
 */
router.delete("/:id", authMiddleware, rewardController.deleteReward);

export default router;
