const express = require("express");
const router = express.Router();
const branchController = require("../../controllers/business-management/branch.controller.cjs");
const authMiddleware = require("../../middlewares/auth.middleware.cjs");

router.post("/", authMiddleware, branchController.addBranch); // Add a branch
router.get("/details/:id", authMiddleware, branchController.getBranchById); // Get branch details
router.put("/:id", authMiddleware, branchController.updateBranch); // Update branch details
router.delete("/:id", authMiddleware, branchController.deleteBranch); // Delete a branch
router.get("/:businessId", authMiddleware, branchController.listBranches); // List all branches for a business

module.exports = router;
