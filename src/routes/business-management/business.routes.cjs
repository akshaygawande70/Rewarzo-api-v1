const express = require("express");
const router = express.Router();
const {
  createBusiness,
  getBusiness,
  updateBusiness,
} = require("../../controllers/business-management/business.controller.cjs");
const authMiddleware = require("../../middlewares/auth.middleware.cjs");

router.post("/", authMiddleware, createBusiness); // Register business
router.get("/:id", authMiddleware, getBusiness); // Get business details
router.put("/:id", authMiddleware, updateBusiness); // Update business

module.exports = router;
