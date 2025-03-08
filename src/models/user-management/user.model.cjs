const mongoose = require("mongoose");
const Config = require("../../config/configModel.cjs"); // Dynamic configurations model

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    role: {
      type: String,
      validate: {
        validator: async (value) => {
          const rolesConfig = await Config.findOne({ key: "roles" });
          return rolesConfig?.values.includes(value);
        },
        message: (props) => `${props.value} is not a valid role`,
      },
      default: "customer",
    },
    designation: {
      type: String,
      validate: {
        validator: async (value) => {
          const designationsConfig = await Config.findOne({
            key: "designations",
          });
          return designationsConfig?.values.includes(value);
        },
        message: (props) => `${props.value} is not a valid designation`,
      },
    },
    customerLevel: {
      type: String,
      validate: {
        validator: async (value) => {
          const levelsConfig = await Config.findOne({ key: "levels" });
          return levelsConfig?.values.includes(value);
        },
        message: (props) => `${props.value} is not a valid customer level`,
      },
      default: "silver",
    },
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
