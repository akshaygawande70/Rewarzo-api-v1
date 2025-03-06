const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ error: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(
      token,
      "1f6b3a9f2c0a673d82c5bda33d19d1edb4e5f171bcf6185d440ca5a5ff2e519b"
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Token is not valid" });
  }
};
