import request from "supertest";
import { expect } from "chai";
import app from "../../config/server.js"; // Ensure your Express app is exported from app.js
import Group from "../../models/customer-groups-management/customergroup.model.js"; // Import the Group model
import Activity from "../../models/rewards-management/activity.model.js"; // Import the Activity model

describe("Group Engagement API", () => {
  beforeEach(async () => {
    await Group.deleteMany();
    await Activity.deleteMany();

    // Seed group and activity data
    await Group.create({
      _id: "groupId123",
      name: "VIP Customers",
      business: "businessId123",
      members: ["userId1", "userId2"],
    });

    await Activity.create([
      {
        user: "userId1",
        business: "businessId123",
        action: "earn",
        points: 50,
      },
      {
        user: "userId2",
        business: "businessId123",
        action: "redeem",
        points: 30,
      },
      {
        user: "userId1",
        business: "businessId123",
        action: "earn",
        points: 100,
      },
    ]);
  });

  it("should return engagement metrics for a group", async () => {
    const res = await request(app).get(
      "/api/groups/group-engagement/groupId123"
    );

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      groupId: "groupId123",
      groupName: "VIP Customers",
      totalPointsEarned: 150,
      totalPointsRedeemed: 30,
    });
  });

  it("should return 404 if group not found", async () => {
    const res = await request(app).get(
      "/api/groups/group-engagement/nonExistentGroup"
    );

    expect(res.status).to.equal(404);
    expect(res.body.error).to.equal("Group not found");
  });
});
