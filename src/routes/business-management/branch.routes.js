import express from "express";
import branchController from "../../controllers/business-management/branch.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/", authMiddleware, branchController.createBranch); // Add a branch
router.get("/:id", authMiddleware, branchController.getBranch); // Get branch details
router.put("/:id", authMiddleware, branchController.updateBranch); // Update a branch
router.delete("/:id", authMiddleware, branchController.deleteBranch); // Delete a branch
router.get(
  "/business/:businessId",
  authMiddleware,
  branchController.listBranches
); // List branches for a business

export default router;
