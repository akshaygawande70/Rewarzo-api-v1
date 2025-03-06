const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./src/config/.env" });
const userRoutes = require("../routes/user-management/user.routes.cjs"); // Import the promotion routes
const connectDB = require("./db.cjs");
const { requestLogger, errorLogger } = require("./logger.cjs");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});
app.use(requestLogger); // Attach logger middleware

// MongoDB connection
connectDB();

// Routes
app.use("/api/users", userRoutes); // Register the users routes
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
