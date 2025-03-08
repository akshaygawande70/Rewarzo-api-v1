const express = require("express");
const router = express.Router();
const branchController = require("../../controllers/business-management/branch.controller.cjs");
const authMiddleware = require("../../middlewares/auth.middleware.cjs");

router.post("/", authMiddleware, branchController.createBranch); // Add a branch
router.get("/:id", authMiddleware, branchController.getBranch); // Get branch details
router.put("/:id", authMiddleware, branchController.updateBranch); // Update a branch
router.delete("/:id", authMiddleware, branchController.deleteBranch); // Delete a branch
router.get(
  "/business/:businessId",
  authMiddleware,
  branchController.listBranches
); // List branches for a business

module.exports = router;
