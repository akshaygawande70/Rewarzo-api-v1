const UserService = require("../../services/user-management/user.service.cjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const user = await UserService.register(name, email, password, phone);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token } = await UserService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await UserService.getProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, points } = req.body;
    const user = await UserService.updateProfile(req.user.id, {
      name,
      phone,
      points,
    });
    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
