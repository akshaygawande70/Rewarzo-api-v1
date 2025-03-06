const Branch = require("../../models/business-management/branch.model.cjs");
const Business = require("../../models/business-management/business.model.cjs");

class BranchRepository {
  async createBranch(branchData) {
    return await new Branch(branchData).save();
  }

  async findById(branchId) {
    return await Branch.findById(branchId).populate("business");
  }

  async updateBranch(branchId, updateData) {
    return await Branch.findByIdAndUpdate(branchId, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteBranch(branchId) {
    return await Branch.findByIdAndDelete(branchId);
  }

  async findBranchesByBusiness(businessId) {
    return await Branch.find({ business: businessId });
  }

  async addBranchToBusiness(businessId, branchId) {
    return await Business.findByIdAndUpdate(
      businessId,
      { $push: { branches: branchId } },
      { new: true }
    );
  }

  async removeBranchFromBusiness(businessId, branchId) {
    return await Business.findByIdAndUpdate(
      businessId,
      { $pull: { branches: branchId } },
      { new: true }
    );
  }
}

module.exports = new BranchRepository();
