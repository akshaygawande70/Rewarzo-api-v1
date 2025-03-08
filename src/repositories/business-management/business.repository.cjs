const Business = require("../../models/business-management/business.model.cjs");

exports.createBusiness = async (data) => {
  return await Business.create(data);
};

exports.findBusinessById = async (id) => {
  return await Business.findById(id)
    .populate("owner")
    .populate("branches")
    .populate("spoc");
};

exports.updateBusiness = async (id, updates) => {
  return await Business.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
};
