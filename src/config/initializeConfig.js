import Config from "./configModel.js";

async function initializeConfigs() {
  const defaultConfigs = [
    {
      key: "roles",
      values: ["admin", "manager", "sales", "customer", "custom"],
    },
    { key: "levels", values: ["silver", "gold", "platinum", "custom"] },
    { key: "designations", values: ["manager", "sales", "custom"] },
  ];

  for (const config of defaultConfigs) {
    const existingConfig = await Config.findOne({ key: config.key });
    if (!existingConfig) {
      await Config.create(config);
    }
  }
  console.log("Default configurations initialized");
}

export default initializeConfigs;
