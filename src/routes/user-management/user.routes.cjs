const express = require("express");
const {
  register,
  login,
  getProfile,
  updateProfile,
} = require("../../controllers/user-management/user.controller.cjs");
const authMiddleware = require("../../middlewares/auth.middleware.cjs");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
