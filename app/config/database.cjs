const mongoose = require("mongoose"); // Fix the incorrect import
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB; // Export the function correctly
