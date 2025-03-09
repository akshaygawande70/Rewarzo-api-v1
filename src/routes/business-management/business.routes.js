import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import businessController from "../../controllers/business-management/business.controller.js";
const router = express.Router();

//Add Swagger annotations
/**
 * @swagger
 * /businesses:
 *   post:
 *     summary: Register a business
 *     description: Register a new business to the system
 *     tags:
 *       - Businesses
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       201:
 *         description: Business registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       400:
 *         description: Error registering business
 */
router.post("/", authMiddleware, businessController.createBusiness); // Register business

//Add Swagger annotations
/**
 * @swagger
 * /businesses/{id}:
 *   get:
 *     summary: Get a business
 *     description: Get details of a business by ID
 *     tags:
 *       - Businesses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Business ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       404:
 *         description: Business not found
 */
router.get("/:id", authMiddleware, businessController.getBusiness); // Get business details

//Add Swagger annotations
/**
 * @swagger
 * /businesses/{id}:
 *   put:
 *     summary: Update a business
 *     description: Update details of a business by ID
 *     tags:
 *       - Businesses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Business ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: Business updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       404:
 *         description: Business not found
 */
router.put("/:id", authMiddleware, businessController.updateBusiness); // Update business details

//Add Swagger annotations
/**
 * @swagger
 * /businesses/{id}:
 *   delete:
 *     summary: Delete a business
 *     description: Delete a business by ID
 *     tags:
 *       - Businesses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Business ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business deleted successfully
 *       404:
 *         description: Business not found
 */
router.delete("/:id", authMiddleware, businessController.deleteBusiness); // Delete business

//Add Swagger annotations
/**
 * @swagger
 * /businesses:
 *   get:
 *     summary: List businesses
 *     description: List all businesses in the system
 *     tags:
 *       - Businesses
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of businesses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Business'
 *       404:
 *         description: No businesses found
 */
router.get("/", authMiddleware, businessController.listBusinesses); // List businesses

export default router;
