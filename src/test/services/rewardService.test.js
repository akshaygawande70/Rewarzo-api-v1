import { expect } from "chai";
import rewardService from "../../services/rewards-management/reward.service.js"; // Import the module under test
import rewardRepository from "../../repositories/rewards-management/reward.repository.js"; // Import the dependency
import sinon from "sinon";

describe("Rewards Service", () => {
  it("should calculate and add earned points", async () => {
    const mockUser = { _id: "userId", points: 100 };
    sinon.stub(rewardRepository, "addPoints").resolves(mockUser);

    const result = await rewardService.earnPoints("userId", "businessId", 50);
    expect(result.points).to.equal(150);
  });
});
