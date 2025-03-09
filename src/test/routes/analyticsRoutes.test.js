import request from "supertest";
import { expect } from "chai";
import app from "../../config/server.js"; // Ensure you export your Express app
import Activity from "../../models/rewards-management/activity.model.js"; // Import the Activity model

describe("Customer Engagement API", () => {
  beforeEach(async () => {
    await Activity.deleteMany(); // Clear test data before each test
    await Activity.create([
      { business: "businessId1", user: "user1", action: "earn", points: 100 },
      { business: "businessId1", user: "user1", action: "redeem", points: 50 },
    ]);
  });

  it("should return customer engagement data", async () => {
    const res = await request(app).get(
      "/api/analytics/customer-engagement/businessId1"
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.include({
      _id: "user1",
      totalPointsEarned: 100,
      totalPointsRedeemed: 50,
      remainingPoints: 50,
    });
  });

  it("should return reward redemption insights", async () => {
    const res = await request(app).get(
      "/api/analytics/reward-insights/businessId1"
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.include({
      _id: "Reward A",
      totalRedemptions: 2,
      totalPointsRedeemed: 100,
    });
  });
});
