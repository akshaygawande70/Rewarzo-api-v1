const express = require("express");
const router = express.Router();
const groupController = require("../../controllers/customer-groups-management/customergroup.controller.cjs"); // Import the group controller
const authMiddleware = require("../../middlewares/auth.middleware.cjs"); // Import the auth middleware

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

module.exports = router;
