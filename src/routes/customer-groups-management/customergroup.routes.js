import express from "express";
import groupController from "../../controllers/customer-groups-management/customergroup.controller.js"; // Import the group controller
import authMiddleware from "../../middlewares/auth.middleware.js"; // Import the auth middleware
const router = express.Router();

// Create a new group
router.post("/create", authMiddleware, groupController.createGroup);

// Add members to a group
router.post("/members/add", authMiddleware, groupController.addMembers);

// Remove members from a group
router.post("/members/remove", authMiddleware, groupController.removeMembers);

// Add MPOCs to a group
router.post("/mpocs/add", authMiddleware, groupController.addMpocs);

// Remove MPOCs from a group
router.post("/mpocs/remove", authMiddleware, groupController.removeMpocs);

// Get group details
router.get("/:id", authMiddleware, groupController.getGroup);

// Update group details
router.put("/:id", authMiddleware, groupController.updateGroup);

// Delete a group
router.delete("/:id", authMiddleware, groupController.deleteGroup);

// List groups
router.get("/", authMiddleware, groupController.listGroups);

export default router;
