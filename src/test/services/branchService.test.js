import { expect } from "chai";
import branchService from "../../services/business-management/branch.service.js"; // Import the module under test
import branchRepository from "../../repositories/business-management/branch.repository.js"; // Import the dependency
import sinon from "sinon";

describe("Branch Service", () => {
  it("should add a branch", async () => {
    const mockBranch = { name: "Branch 1", address: "123 Street" };
    sinon.stub(branchRepository, "createBranch").resolves(mockBranch);

    const result = await branchService.addBranch(mockBranch);
    expect(result).to.deep.equal(mockBranch);
  });
});
