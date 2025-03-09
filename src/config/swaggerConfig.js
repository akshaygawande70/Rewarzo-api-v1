import swaggerJSDoc from "swagger-jsdoc";
import apiMetadata from "./apiMetadata.js"; // Import metadata

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

export default swaggerSpecs;
