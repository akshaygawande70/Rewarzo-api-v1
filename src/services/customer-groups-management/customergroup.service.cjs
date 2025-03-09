const groupRepository = require("../../repositories/customer-groups-management/customergroup.repository.cjs"); // Import the group repository

// Create a new group
const createGroup = async (businessId, name, description, members, mpocs) => {
  return await groupRepository.createGroup({
    name,
    description,
    business: businessId,
    members,
    mpocs,
  });
};

// Add members to a group
const addMembers = async (groupId, memberIds) => {
  const group = await groupRepository.findGroupById(groupId);
  if (!group) throw new Error("Group not found");

  group.members.push(...memberIds);
  await group.save();

  return group;
};

// Remove members from a group
const removeMembers = async (groupId, memberIds) => {
  const group = await groupRepository.findGroupById(groupId);
  if (!group) throw new Error("Group not found");

  group.members = group.members.filter(
    (member) => !memberIds.includes(member.toString())
  );
  await group.save();

  return group;
};

// Add MPOCs to a group
const addMpocs = async (groupId, mpocIds) => {
  const group = await groupRepository.findGroupById(groupId);
  if (!group) throw new Error("Group not found");

  group.mpocs.push(...mpocIds);
  await group.save();

  return group;
};

// Remove MPOCs from a group
const removeMpocs = async (groupId, mpocIds) => {
  const group = await groupRepository.findGroupById(groupId);
  if (!group) throw new Error("Group not found");

  group.mpocs = group.mpocs.filter(
    (mpoc) => !mpocIds.includes(mpoc.toString())
  );
  await group.save();

  return group;
};

module.exports = {
  createGroup,
  addMembers,
  removeMembers,
  addMpocs,
  removeMpocs,
};
