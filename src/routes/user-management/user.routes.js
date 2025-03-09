import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import userController from "../../controllers/user-management/user.controller.js";

const router = express.Router();

//Add Swagger annotations
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a user
 *     description: Register a new user to the system
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error registering user
 */
router.post("/register", userController.register);

//Add Swagger annotations
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login
 *     description: Login to the system
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error logging in
 */
router.post("/login", userController.login);

//Add Swagger annotations
/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get user profile
 *     description: Get user profile details
 *     tags:
 *       - Users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User profile details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
router.get("/profile", authMiddleware, userController.getProfile);

//Add Swagger annotations
/**
 * @swagger
 * /users/profile:
 *   put:
 *     summary: Update user profile
 *     description: Update user profile details
 *     tags:
 *       - Users
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error updating user profile
 */
router.put("/profile", authMiddleware, userController.updateProfile);

export default router;
