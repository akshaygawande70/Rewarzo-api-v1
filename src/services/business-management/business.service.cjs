const BusinessRepository = require("../../repositories/business-management/business.repository.cjs");

class BusinessService {
  async createBusiness(name, address, contact, ownerId) {
    return await BusinessRepository.createBusiness({
      name,
      address,
      contact,
      owner: ownerId,
    });
  }

  async getBusiness(businessId) {
    const business = await BusinessRepository.findById(businessId);
    if (!business) throw new Error("Business not found");
    return business;
  }
}

module.exports = new BusinessService();
