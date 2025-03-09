import Business from "../../models/business-management/business.model.js";

const createBusiness = async (data) => {
  return await Business.create(data);
};

const findBusinessById = async (id) => {
  return await Business.findById(id)
    .populate("owner")
    .populate("branches")
    .populate("spoc");
};

const updateBusiness = async (id, updates) => {
  return await Business.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
};

const deleteBusiness = async (id) => {
  return await Business.findByIdAndDelete(id);
};

const listBusinesses = async () => {
  return await Business.find()
    .populate("owner")
    .populate("branches")
    .populate("spoc");
};

export default {
  createBusiness,
  findBusinessById,
  updateBusiness,
  deleteBusiness,
  listBusinesses,
};
