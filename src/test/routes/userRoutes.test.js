import request from "supertest";
import app from "../../config/server.js"; // Import the server
import User from "../../models/user-management/user.model.js"; // Import the dependency

describe("User Routes", () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  it("should register a user via API", async () => {
    const res = await request(app).post("/api/users/register").send({
      name: "John",
      email: "john@example.com",
      password: "password123",
      phone: "1234567890",
    });
    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal("User registered successfully");
  });
});
