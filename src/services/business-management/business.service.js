import businessRepository from "../../repositories/business-management/business.repository.js";

const registerBusiness = async (data) => {
  // Add any specific business logic here
  return await businessRepository.createBusiness(data);
};

const getBusinessById = async (id) => {
  const business = await businessRepository.findBusinessById(id);
  if (!business) throw new Error("Business not found");
  return business;
};

const updateBusinessDetails = async (id, updates) => {
  return await businessRepository.updateBusiness(id, updates);
};

const deleteBusiness = async (id) => {
  return await businessRepository.deleteBusiness(id);
};

const listBusinesses = async () => {
  return await businessRepository.listBusinesses();
};

export default {
  registerBusiness,
  getBusinessById,
  updateBusinessDetails,
  deleteBusiness,
  listBusinesses,
};
