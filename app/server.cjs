const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user-management/UserRoutes.cjs"); // Import the promotion routes
const connectDB = require("./config/database.cjs");
const { requestLogger, errorLogger } = require("./middleware/logger.cjs");

dotenv.config();

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
