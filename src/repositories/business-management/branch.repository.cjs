const Branch = require("../../models/business-management/branch.model.cjs");

exports.createBranch = async (data) => {
  return await Branch.create(data);
};

exports.findBranchById = async (id) => {
  return await Branch.findById(id).populate("business"); // Populate parent business details
};

exports.findBranchesByBusiness = async (businessId) => {
  return await Branch.find({ business: businessId });
};

exports.updateBranch = async (id, updates) => {
  return await Branch.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
};

exports.deleteBranch = async (id) => {
  return await Branch.findByIdAndDelete(id);
};
