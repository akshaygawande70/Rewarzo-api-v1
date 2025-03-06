const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./src/config/.env" });
const UserRepository = require("../../repositories/user-management/user.repository.cjs");

class UserService {
  async register(name, email, password, phone) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserRepository.createUser({
      name,
      email,
      password: hashedPassword,
      phone,
    });
  }

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Password incorrect");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    return { token };
  }

  async getProfile(userId) {
    return await UserRepository.findById(userId);
  }

  async updateProfile(userId, updateData) {
    const user = await UserRepository.updateUser(userId, updateData);
    if (!user) throw new Error("User not found");
    return user;
  }
}

module.exports = new UserService();
