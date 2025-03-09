import { expect } from "chai";
import sinon from "sinon";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userService from "../../services/user-management/user.service.js"; // Import the module under test
import userRepository from "../../repositories/user-management/user.repository.js"; // Import the dependency

describe("User Service", () => {
  afterEach(() => sinon.restore());

  it("should register a user successfully", async () => {
    const mockUser = {
      name: "John",
      email: "john@example.com",
      password: "hashed",
      phone: "1234567890",
    };
    sinon.stub(userRepository, "createUser").resolves(mockUser);
    sinon.stub(bcrypt, "hash").resolves("hashed");

    const result = await userService.register(
      "John",
      "john@example.com",
      "password123",
      "1234567890"
    );
    expect(result).to.deep.equal(mockUser);
  });

  it("should throw an error if user already exists", async () => {
    sinon
      .stub(userRepository, "findByEmail")
      .resolves({ email: "john@example.com" });

    try {
      await userService.register(
        "John",
        "john@example.com",
        "password123",
        "1234567890"
      );
    } catch (error) {
      expect(error.message).to.equal("User already exists");
    }
  });

  it("should return a token upon successful login", async () => {
    const mockUser = {
      email: "john@example.com",
      password: "hashed",
      _id: "userId123",
    };
    sinon.stub(userRepository, "findByEmail").resolves(mockUser);
    sinon.stub(bcrypt, "compare").resolves(true);
    sinon.stub(jwt, "sign").returns("token123");

    const result = await userService.login("john@example.com", "password123");
    expect(result).to.deep.equal({ token: "token123" });
  });

  it("should throw an error for incorrect login password", async () => {
    sinon.stub(userRepository, "findByEmail").resolves({ password: "hashed" });
    sinon.stub(bcrypt, "compare").resolves(false);

    try {
      await userService.login("john@example.com", "wrongPassword");
    } catch (error) {
      expect(error.message).to.equal("Password incorrect");
    }
  });
});
