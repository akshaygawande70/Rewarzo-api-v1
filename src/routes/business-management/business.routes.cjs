const express = require("express");
const router = express.Router();
const {
  createBusiness,
  getBusiness,
} = require("../../controllers/business-management/business.controller.cjs");
const authMiddleware = require("../../middlewares/auth.middleware.cjs");

router.post("/", authMiddleware, createBusiness); // Route to create a business
router.get("/:id", authMiddleware, getBusiness); // Route to get business details

module.exports = router;
