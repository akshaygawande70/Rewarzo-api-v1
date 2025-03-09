const apiMetadata = {
  // User Routes Metadata
  "/api/users/register": {
    post: {
      summary: "Register a new user",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", description: "User's name" },
                email: { type: "string", description: "User's email" },
                password: { type: "string", description: "User's password" },
                phone: { type: "string", description: "User's phone" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "User successfully registered" },
        400: { description: "Error occurred" },
      },
    },
  },
  "/api/users/login": {
    post: {
      summary: "User login",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string", description: "User's email" },
                password: { type: "string", description: "User's password" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Login successful" },
        400: { description: "Invalid credentials" },
      },
    },
  },
  "/api/users/profile": {
    get: {
      summary: "Get user profile",
      tags: ["Users"],
      responses: {
        200: { description: "User profile retrieved successfully" },
        401: { description: "Unauthorized access" },
      },
    },
    put: {
      summary: "Update user profile",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", description: "Updated user's name" },
                phone: {
                  type: "string",
                  description: "Updated user's phone number",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "User profile updated successfully" },
        400: { description: "Error occurred" },
      },
    },
  },

  // Business Routes Metadata
  "/api/businesses": {
    post: {
      summary: "Create a new business",
      tags: ["Businesses"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", description: "Business's name" },
                address: { type: "string", description: "Business's address" },
                contact: {
                  type: "string",
                  description: "Business's contact number",
                },
                spocId: {
                  type: "string",
                  description: "Assigned SPOC's user ID",
                },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Business successfully created" },
        400: { description: "Error occurred" },
      },
    },
  },
  "/api/businesses/{id}": {
    get: {
      summary: "Get business details",
      tags: ["Businesses"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business ID",
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Business details retrieved" },
        404: { description: "Business not found" },
      },
    },
    put: {
      summary: "Update business details",
      tags: ["Businesses"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Business ID",
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Updated business's name",
                },
                address: {
                  type: "string",
                  description: "Updated business's address",
                },
                contact: {
                  type: "string",
                  description: "Updated contact number",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Business successfully updated" },
        400: { description: "Error occurred" },
      },
    },
  },

  // Branch Routes Metadata
  "/api/branches": {
    post: {
      summary: "Create a new branch",
      tags: ["Branches"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", description: "Branch's name" },
                address: { type: "string", description: "Branch's address" },
                contact: {
                  type: "string",
                  description: "Branch's contact number",
                },
                businessId: {
                  type: "string",
                  description: "Parent business's ID",
                },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Branch successfully created" },
        400: { description: "Error occurred" },
      },
    },
  },
  "/api/branches/{id}": {
    get: {
      summary: "Get branch details",
      tags: ["Branches"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Branch ID",
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Branch details retrieved" },
        404: { description: "Branch not found" },
      },
    },
    put: {
      summary: "Update branch details",
      tags: ["Branches"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "Branch ID",
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", description: "Updated branch's name" },
                address: {
                  type: "string",
                  description: "Updated branch's address",
                },
                contact: {
                  type: "string",
                  description: "Updated contact number",
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Branch successfully updated" },
        400: { description: "Error occurred" },
      },
    },
  },
  "/api/branches/business/{businessId}": {
    get: {
      summary: "List all branches of a business",
      tags: ["Branches"],
      parameters: [
        {
          name: "businessId",
          in: "path",
          required: true,
          description: "Business ID",
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Branches retrieved successfully" },
        400: { description: "Error occurred" },
      },
    },
  },
};

export default apiMetadata;
