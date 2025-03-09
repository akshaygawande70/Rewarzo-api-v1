const Group = require("../../models/customer-groups-management/customergroup.model.cjs"); // Import the Group model

const createGroup = async (groupData) => await Group.create(groupData);
const findGroupById = async (groupId) =>
  await Group.findById(groupId).populate("members").populate("mpocs");
const updateGroup = async (groupId, updates) =>
  await Group.findByIdAndUpdate(groupId, updates, { new: true });
const deleteGroup = async (groupId) => await Group.findByIdAndDelete(groupId);

const listGroupsByBusiness = async (businessId) =>
  await Group.find({ business: businessId });

module.exports = {
  createGroup,
  findGroupById,
  updateGroup,
  deleteGroup,
  listGroupsByBusiness,
};
