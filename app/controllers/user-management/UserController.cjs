const User = require("../../models/user-management/UserModel.cjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, phone });
    await user.save();
    res.status(201).json({ this: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Password incorrect");

    const token = jwt.sign(
      { id: user._id },
      "1f6b3a9f2c0a673d82c5bda33d19d1edb4e5f171bcf6185d440ca5a5ff2e519b"
    );
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, points } = req.body; // Include fields you want to update
    const user = await User.findByIdAndUpdate(
      req.user.id, // Use ID from authMiddleware
      { name, phone, points }, // Fields to update
      { new: true, runValidators: true } // Returns updated user & ensures validation
    ).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
