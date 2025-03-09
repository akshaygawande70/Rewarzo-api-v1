import { expect } from "chai";
import businessService from "../../services/business-management/business.service.js"; // Import the module under test
import businessRepository from "../../repositories/business-management/business.repository.js"; // Import the dependency
import sinon from "sinon";

describe("Business Service", () => {
  it("should create a new business", async () => {
    const mockBusiness = {
      name: "Business A",
      address: "123 St",
      contact: "9876543210",
    };
    sinon.stub(businessRepository, "createBusiness").resolves(mockBusiness);

    const result = await businessService.createBusiness(mockBusiness);
    expect(result).to.deep.equal(mockBusiness);
  });
});
