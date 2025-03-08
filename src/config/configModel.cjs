const mongoose = require("mongoose");

const configSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    values: [{ type: String }], // e.g., roles, levels, designations
  },
  { timestamps: true }
);

module.exports = mongoose.model("Config", configSchema);
