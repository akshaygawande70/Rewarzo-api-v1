const swaggerJSDoc = require("swagger-jsdoc");
const apiMetadata = require("./apiMetadata.cjs"); // Import metadata

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Loyalty Rewards API",
      version: "1.0.0",
      description: "API documentation for the Loyalty Rewards System",
    },
    servers: [{ url: "/" }],
    paths: apiMetadata, // Use metadata as paths
  },
  apis: [],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpecs;
