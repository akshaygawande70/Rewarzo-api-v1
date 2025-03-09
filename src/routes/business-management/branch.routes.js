import express from "express";
import branchController from "../../controllers/business-management/branch.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
const router = express.Router();

//Add Swagger annotations
/**
 * @swagger
 * /branches:
 *   post:
 *     summary: Add a branch
 *     description: Add a new branch to the system
 *     tags:
 *       - Branches
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       201:
 *         description: Branch created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Error creating branch
 */
router.post("/", authMiddleware, branchController.createBranch); // Add a branch

//Add Swagger annotations
/**
 * @swagger
 * /branches/{id}:
 *   get:
 *     summary: Get a branch
 *     description: Get details of a branch by ID
 *     tags:
 *       - Branches
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Branch ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       404:
 *         description: Branch not found
 */
router.get("/:id", authMiddleware, branchController.getBranch); // Get branch details

//Add Swagger annotations
/**
 * @swagger
 * /branches/{id}:
 *   put:
 *     summary: Update a branch
 *     description: Update details of a branch by ID
 *     tags:
 *       - Branches
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Branch ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Error updating branch
 */
router.put("/:id", authMiddleware, branchController.updateBranch); // Update a branch

//Add Swagger annotations
/**
 * @swagger
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     description: Delete a branch by ID
 *     tags:
 *       - Branches
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Branch ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 *       404:
 *         description: Branch not found
 */
router.delete("/:id", authMiddleware, branchController.deleteBranch); // Delete a branch

//Add Swagger annotations
/**
 * @swagger
 * /branches/business/{businessId}:
 *   get:
 *     summary: List branches
 *     description: List all branches for a business
 *     tags:
 *       - Branches
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
 *         description: List of branches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Error listing branches
 */
router.get(
  "/business/:businessId",
  authMiddleware,
  branchController.listBranches
); // List branches for a business

export default router;
