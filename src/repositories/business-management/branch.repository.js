import Branch from "../../models/business-management/branch.model.js";

const createBranch = async (data) => {
  return await Branch.create(data);
};

const findBranchById = async (id) => {
  return await Branch.findById(id).populate("business"); // Populate parent business details
};

const findBranchesByBusiness = async (businessId) => {
  return await Branch.find({ business: businessId });
};

const updateBranch = async (id, updates) => {
  return await Branch.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
};

const deleteBranch = async (id) => {
  return await Branch.findByIdAndDelete(id);
};

export default {
  createBranch,
  findBranchById,
  findBranchesByBusiness,
  updateBranch,
  deleteBranch,
};
