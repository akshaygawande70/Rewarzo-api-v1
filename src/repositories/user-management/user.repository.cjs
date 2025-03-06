const User = require("../../models/user-management/user.model.cjs");

class UserRepository {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(userId) {
    return await User.findById(userId).select("-password");
  }

  async updateUser(userId, updateData) {
    return await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");
  }
}

module.exports = new UserRepository();
