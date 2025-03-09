import { expect } from "chai";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import Activity from "../../models/rewards-management/activity.model.js"; // Import the Activity model
import analyticsService from "../../analytics-layer/service/analytics.service.js"; // Import the module under test

describe("Customer Engagement Analytics", () => {
  let mongoServer;

  before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Activity.deleteMany(); // Clear existing data before each test
  });

  it("should calculate total points earned, redeemed, and remaining for customers", async () => {
    // Seed test data
    await Activity.create([
      { business: "businessId1", user: "user1", action: "earn", points: 100 },
      { business: "businessId1", user: "user1", action: "redeem", points: 50 },
      { business: "businessId1", user: "user2", action: "earn", points: 200 },
    ]);

    const result = await analyticsService.customerEngagementAnalytics(
      "businessId1"
    );

    expect(result).to.deep.include({
      _id: "user1",
      totalPointsEarned: 100,
      totalPointsRedeemed: 50,
      remainingPoints: 50,
    });

    expect(result).to.deep.include({
      _id: "user2",
      totalPointsEarned: 200,
      totalPointsRedeemed: 0,
      remainingPoints: 200,
    });
  });
});

describe("Reward Insights Analytics", () => {
  beforeEach(async () => {
    await Activity.deleteMany();
  });

  it("should calculate reward redemption insights", async () => {
    // Seed test data
    await Activity.create([
      {
        business: "businessId1",
        action: "redeem",
        points: 50,
        description: "Reward A",
      },
      {
        business: "businessId1",
        action: "redeem",
        points: 100,
        description: "Reward B",
      },
      {
        business: "businessId1",
        action: "redeem",
        points: 50,
        description: "Reward A",
      },
    ]);

    const result = await analyticsService.rewardInsightsAnalytics(
      "businessId1"
    );

    expect(result).to.deep.include({
      _id: "Reward A",
      totalRedemptions: 2,
      totalPointsRedeemed: 100,
    });

    expect(result).to.deep.include({
      _id: "Reward B",
      totalRedemptions: 1,
      totalPointsRedeemed: 100,
    });
  });
});
