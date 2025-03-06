const express = require("express"); // Import the express library
const cors = require("cors"); // Import the cors middleware
require("dotenv").config({ path: "./src/config/.env" }); // Load environment variables
const connectDB = require("./db.cjs"); // Import the database connection
const { requestLogger, errorLogger } = require("./logger.cjs"); // Import the logger middleware
const userRoutes = require("../routes/user-management/user.routes.cjs"); // Import the promotion routes
const businessRoutes = require("../routes/business-management/business.routes.cjs"); // Import the business routes
const branchRoutes = require("../routes/business-management/branch.routes.cjs"); // Import the branch routes

// Create an express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public")); // Serve static files

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Attach logger middleware
app.use(requestLogger);

// Attach error logger middleware
app.use(errorLogger);

// Handle server shutdown
process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});

// MongoDB connection
connectDB();

// Routes
app.use("/api/users", userRoutes); // Register the users routes
app.use("/api/businesses", businessRoutes); // Register the business routes
app.use("/api/branches", branchRoutes); // Register the branch routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
