import express from "express";
import groupController from "../../controllers/customer-groups-management/customergroup.controller.js"; // Import the group controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import the auth middleware
const router = express.Router();

// Create a new group
//Add Swagger annotations
/**
 * @swagger
 * /groups/create:
 *   post:
 *     summary: Create a group
 *     description: Create a new group
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       201:
 *         description: Group created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error creating group
 */
router.post("/create", authMiddleware, groupController.createGroup);

// Add members to a group
//Add Swagger annotations
/**
 * @swagger
 * /groups/members/add:
 *   post:
 *     summary: Add members to a group
 *     description: Add members to a group
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupMembers'
 *     responses:
 *       200:
 *         description: Members added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error adding members
 */
router.post("/members/add", authMiddleware, groupController.addMembers);

// Remove members from a group
//Add Swagger annotations
/**
 * @swagger
 * /groups/members/remove:
 *   post:
 *     summary: Remove members from a group
 *     description: Remove members from a group
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupMembers'
 *     responses:
 *       200:
 *         description: Members removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error removing members
 */
router.post("/members/remove", authMiddleware, groupController.removeMembers);

// Add MPOCs to a group
//Add Swagger annotations
/**
 * @swagger
 * /groups/mpocs/add:
 *   post:
 *     summary: Add MPOCs to a group
 *     description: Add MPOCs to a group
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupMpocs'
 *     responses:
 *       200:
 *         description: MPOCs added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error adding MPOCs
 */
router.post("/mpocs/add", authMiddleware, groupController.addMpocs);

// Remove MPOCs from a group
//Add Swagger annotations
/**
 * @swagger
 * /groups/mpocs/remove:
 *   post:
 *     summary: Remove MPOCs from a group
 *     description: Remove MPOCs from a group
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GroupMpocs'
 *     responses:
 *       200:
 *         description: MPOCs removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error removing MPOCs
 */
router.post("/mpocs/remove", authMiddleware, groupController.removeMpocs);

// Get group details
//Add Swagger annotations
/**
 * @swagger
 * /groups/{id}:
 *   get:
 *     summary: Get a group
 *     description: Get details of a group by ID
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       404:
 *         description: Group not found
 */
router.get("/:id", authMiddleware, groupController.getGroup);

// Update group details
//Add Swagger annotations
/**
 * @swagger
 * /groups/{id}:
 *   put:
 *     summary: Update a group
 *     description: Update details of a group by ID
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       200:
 *         description: Group updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Error updating group
 */
router.put("/:id", authMiddleware, groupController.updateGroup);

// Delete a group
//Add Swagger annotations
/**
 * @swagger
 * /groups/{id}:
 *   delete:
 *     summary: Delete a group
 *     description: Delete a group by ID
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Group ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *       400:
 *         description: Error deleting group
 */
router.delete("/:id", authMiddleware, groupController.deleteGroup);

// List groups
//Add Swagger annotations
/**
 * @swagger
 * /groups:
 *   get:
 *     summary: List groups
 *     description: List all groups
 *     tags:
 *       - Groups
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Group'
 */
router.get("/", authMiddleware, groupController.listGroups);

export default router;
