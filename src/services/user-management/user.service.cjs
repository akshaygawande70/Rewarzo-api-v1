const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./src/config/.env" });
const UserRepository = require("../../repositories/user-management/user.repository.cjs");

// Register a new user
const register = async (name, email, password, phone) => {
  const existingUser = await UserRepository.findByEmail(email);
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  return await UserRepository.createUser({
    name,
    email,
    password: hashedPassword,
    phone,
  });
};

// User login
const login = async (email, password) => {
  const user = await UserRepository.findByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Password incorrect");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });

  return { token };
};

// Get user profile
const getProfile = async (userId) => {
  return await UserRepository.findById(userId);
};

// Update user profile
const updateProfile = async (userId, updateData) => {
  const user = await UserRepository.updateUser(userId, updateData);
  if (!user) throw new Error("User not found");
  return user;
};

// Export all service functions
module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
};
