import branchRepository from "../../repositories/business-management/branch.repository.js";

const addBranch = async (data) => {
  // Perform additional business logic here if needed
  return await branchRepository.createBranch(data);
};

const getBranchById = async (id) => {
  const branch = await branchRepository.findBranchById(id);
  if (!branch) throw new Error("Branch not found");
  return branch;
};

const updateBranchDetails = async (id, updates) => {
  return await branchRepository.updateBranch(id, updates);
};

const removeBranch = async (id) => {
  const deletedBranch = await branchRepository.deleteBranch(id);
  if (!deletedBranch) throw new Error("Branch not found");
  return deletedBranch;
};

const getBranchesByBusiness = async (businessId) => {
  return await branchRepository.listBranchesByBusiness(businessId);
};

export default {
  addBranch,
  getBranchById,
  updateBranchDetails,
  removeBranch,
  getBranchesByBusiness,
};
