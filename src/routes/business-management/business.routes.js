import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
import businessController from "../../controllers/business-management/business.controller.js";
const router = express.Router();

router.post("/", authMiddleware, businessController.createBusiness); // Register business
router.get("/:id", authMiddleware, businessController.getBusiness); // Get business details
router.put("/:id", authMiddleware, businessController.updateBusiness); // Update business details

export default router;
