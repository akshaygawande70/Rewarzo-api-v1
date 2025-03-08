const UserService = require("../../services/user-management/user.service.cjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    const newUser = await UserService.register(
      name,
      email,
      password,
      phone,
      role
    );

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
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
    const updateData = req.body; // Directly capture all updateable data from the request body

    const user = await UserService.updateProfile(req.user.id, updateData);

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
