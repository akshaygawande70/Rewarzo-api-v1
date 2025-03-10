import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Loyalty Rewards API",
      version: "1.0.0",
      description: "API documentation for the Loyalty Rewards System",
    },
    servers: [{ url: "/" }],
  },
  apis: ["./src/routes/**/*.routes.js"], // Dynamically scan all 'routes.js' files in sub-folders
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export default swaggerSpecs;
