import mongoose from "mongoose";

const configSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    values: [{ type: String }], // e.g., roles, levels, designations
  },
  { timestamps: true }
);

export default mongoose.model("Config", configSchema);
