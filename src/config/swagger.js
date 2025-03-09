import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Loyalty Rewards API",
      version: "1.0.0",
      description: "API documentation for the Loyalty Rewards System",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./src/routes/**/*.js"], // Scans route files for API definitions
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);
export default swaggerSpecs;
