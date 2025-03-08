const branchRepository = require("../../repositories/business-management/branch.repository.cjs");

exports.addBranch = async (data) => {
  // Perform additional business logic here if needed
  return await branchRepository.createBranch(data);
};

exports.getBranchById = async (id) => {
  const branch = await branchRepository.findBranchById(id);
  if (!branch) throw new Error("Branch not found");
  return branch;
};

exports.updateBranchDetails = async (id, updates) => {
  return await branchRepository.updateBranch(id, updates);
};

exports.removeBranch = async (id) => {
  const deletedBranch = await branchRepository.deleteBranch(id);
  if (!deletedBranch) throw new Error("Branch not found");
  return deletedBranch;
};

exports.getBranchesByBusiness = async (businessId) => {
  return await branchRepository.listBranchesByBusiness(businessId);
};
