import express from "express"; // Import the express library
import cors from "cors"; // Import the cors middleware
import swaggerUi from "swagger-ui-express"; // Import the swagger UI library
import swaggerSpecs from "./swaggerConfig.js"; // Import the swagger configuration
import connectDB from "./db.js"; // Import the database connection
import { requestLogger, errorLogger } from "./logger.js"; // Import the logger middleware
import initializeConfigs from "./initializeConfig.js"; // Import the initializeConfigs function
import userRoutes from "../routes/user-management/user.routes.js"; // Import the promotion routes
import businessRoutes from "../routes/business-management/business.routes.js"; // Import the business routes
import branchRoutes from "../routes/business-management/branch.routes.js"; // Import the branch routes
import rewardRoutes from "../routes/rewards-management/reward.routes.js"; // Import the reward routes
import rewardRuleRoutes from "../routes/rewards-management/rewardrule.routes.js"; // Import the reward rule routes
import customerGroupRoutes from "../routes/customer-groups-management/customergroup.routes.js"; // Import the customer group routes
import analyticsRoutes from "../analytics-layer/routes/analytics.routes.js"; // Import the analytics routes
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

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

//export your Express app
export default app;
