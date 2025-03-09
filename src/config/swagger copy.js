import swaggerAutogen from "swagger-autogen";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });
const PORT = process.env.PORT || 5000;
const SCHEME = process.env.SCHEME || "http";
const HOST = process.env.HOST || "localhost";

// Setup __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerGen = swaggerAutogen();

// Swagger documentation info
const doc = {
  info: {
    title: "Loyalty Rewards API",
    description: "API documentation for the Loyalty Rewards System",
  },
  host: `${HOST}:${PORT}`,
  schemes: [SCHEME],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = path.join(__dirname, "swagger-outputs.json"); // Save JSON here
const routesDir = path.join(__dirname, "../routes"); // Path to routes directory

// Function to recursively scan for .routes.js files
const getAllRoutes = (dir) => {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getAllRoutes(fullPath)); // Recurse into subdirectories
    } else if (file.endsWith(".routes.js")) {
      files.push(fullPath);
    }
  });
  return files;
};

const endpointsFiles = getAllRoutes(routesDir); // Auto-scan all .routes.js files

// Generate Swagger JSON
swaggerGen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated!");
});
