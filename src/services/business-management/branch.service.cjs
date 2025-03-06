const BranchRepository = require("../../repositories/business-management/branch.repository.cjs");
const BusinessRepository = require("../../repositories/business-management/business.repository.cjs");

class BranchService {
  async addBranch(name, address, contact, businessId) {
    const business = await BusinessRepository.findById(businessId);
    if (!business) throw new Error("Business not found");

    const newBranch = await BranchRepository.createBranch({
      name,
      address,
      contact,
      business: businessId,
    });
    await BranchRepository.addBranchToBusiness(businessId, newBranch._id);

    return newBranch;
  }

  async getBranch(branchId) {
    const branch = await BranchRepository.findById(branchId);
    if (!branch) throw new Error("Branch not found");
    return branch;
  }

  async updateBranch(branchId, name, address, contact) {
    const updatedBranch = await BranchRepository.updateBranch(branchId, {
      name,
      address,
      contact,
    });
    if (!updatedBranch) throw new Error("Branch not found");
    return updatedBranch;
  }

  async deleteBranch(branchId) {
    const branch = await BranchRepository.findById(branchId);
    if (!branch) throw new Error("Branch not found");

    await BranchRepository.deleteBranch(branchId);
    await BranchRepository.removeBranchFromBusiness(branch.business, branchId);

    return { message: "Branch deleted successfully" };
  }

  async listBranches(businessId) {
    return await BranchRepository.findBranchesByBusiness(businessId);
  }
}

module.exports = new BranchService();
