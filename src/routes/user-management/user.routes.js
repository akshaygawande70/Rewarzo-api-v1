import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import userController from "../../controllers/user-management/user.controller.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", authMiddleware, userController.getProfile);
router.put("/profile", authMiddleware, userController.updateProfile);

export default router;
