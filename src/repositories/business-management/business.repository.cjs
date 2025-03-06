const Business = require("../../models/business-management/business.model.cjs");

class BusinessRepository {
  async createBusiness(businessData) {
    const business = new Business(businessData);
    return await business.save();
  }

  async findById(businessId) {
    return await Business.findById(businessId).populate("branches");
  }
}

module.exports = new BusinessRepository();
