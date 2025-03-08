const BusinessRepository = require("../../repositories/business-management/business.repository.cjs");

exports.registerBusiness = async (data) => {
  // Add any specific business logic here
  return await businessRepository.createBusiness(data);
};

exports.getBusinessById = async (id) => {
  const business = await businessRepository.findBusinessById(id);
  if (!business) throw new Error("Business not found");
  return business;
};

exports.updateBusinessDetails = async (id, updates) => {
  return await businessRepository.updateBusiness(id, updates);
};
