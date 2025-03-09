import { expect } from "chai";
import groupService from "../../services/customer-groups-management/customergroup.service.js"; // Import the module under test
import groupRepository from "../../repositories/customer-groups-management/customergroup.repository.js"; // Import the dependency
import activityRepository from "../../repositories/rewards-management/activity.repository.js"; // Import the dependency
import sinon from "sinon";

describe("Group Engagement Analytics Service", () => {
  afterEach(() => sinon.restore());

  it("should return aggregated engagement metrics for a group", async () => {
    const mockGroup = {
      _id: "groupId123",
      name: "VIP Customers",
      members: ["userId1", "userId2"],
    };

    const mockActivities = [
      { user: "userId1", action: "earn", points: 50 },
      { user: "userId2", action: "redeem", points: 30 },
      { user: "userId1", action: "earn", points: 100 },
    ];

    sinon.stub(groupRepository, "findGroupById").resolves(mockGroup);
    sinon
      .stub(activityRepository, "findActivitiesByUsers")
      .resolves(mockActivities);

    const result = await groupService.getGroupEngagementMetrics("groupId123");

    expect(result).to.deep.equal({
      groupId: "groupId123",
      groupName: "VIP Customers",
      totalPointsEarned: 150,
      totalPointsRedeemed: 30,
    });
  });

  it("should throw an error if group not found", async () => {
    sinon.stub(groupRepository, "findGroupById").resolves(null);

    try {
      await groupService.getGroupEngagementMetrics("groupId123");
    } catch (error) {
      expect(error.message).to.equal("Group not found");
    }
  });
});
