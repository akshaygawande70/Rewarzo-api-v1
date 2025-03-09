import User from "../../models/user-management/user.model.js";

export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const findByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findById = async (userId) => {
  return await User.findById(userId).select("-password");
};

export const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");
};

export const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

export default {
  createUser,
  findByEmail,
  findById,
  updateUser,
  deleteUser,
};
