const express = require("express"); // Import the express library
const cors = require("cors"); // Import the cors middleware
require("dotenv").config({ path: "./src/config/.env" }); // Load environment variables
const swaggerUi = require("swagger-ui-express"); // Import the swagger UI library
const swaggerSpecs = require("./swaggerConfig.cjs"); // Import the swagger configuration
const connectDB = require("./db.cjs"); // Import the database connection
const { requestLogger, errorLogger } = require("./logger.cjs"); // Import the logger middleware
const initializeConfigs = require("./initializeConfig.cjs"); // Import the initializeConfigs function
const userRoutes = require("../routes/user-management/user.routes.cjs"); // Import the promotion routes
const businessRoutes = require("../routes/business-management/business.routes.cjs"); // Import the business routes
const branchRoutes = require("../routes/business-management/branch.routes.cjs"); // Import the branch routes
const rewardRoutes = require("../routes/rewards-management/reward.routes.cjs"); // Import the reward routes
const rewardRuleRoutes = require("../routes/rewards-management/rewardrule.routes.cjs"); // Import the reward rule routes
const customerGroupRoutes = require("../routes/customer-groups-management/customergroup.routes.cjs"); // Import the customer group routes
const analyticsRoutes = require("../analytics-layer/routes/analytics.routes.cjs"); // Import the analytics routes

// Create an express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public")); // Serve static files
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); // Serve swagger docs

// Initialize configurations
initializeConfigs;

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
app.use("/api/rewards", rewardRoutes); // Register the reward routes
app.use("/api/reward-rules", rewardRuleRoutes); // Register the reward rule routes
app.use("/api/groups", customerGroupRoutes); // Register the customer group routes
app.use("/api/analytics", analyticsRoutes); // Register the analytics routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
