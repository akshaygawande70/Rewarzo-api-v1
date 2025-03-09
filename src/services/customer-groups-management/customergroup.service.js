import groupRepository from "../../repositories/customer-groups-management/customergroup.repository.js"; // Import the group repository

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

// Get a group by its ID
const getGroupById = async (groupId) => {
  return await groupRepository.findGroupById(groupId);
};

// Update group details
const updateGroup = async (groupId, updates) => {
  return await groupRepository.updateGroup(groupId, updates);
};

// Delete a group
const deleteGroup = async (groupId) => {
  return await groupRepository.deleteGroup(groupId);
};

// List groups
const listGroups = async () => {
  return await groupRepository.listGroups();
};

export default {
  createGroup,
  addMembers,
  removeMembers,
  addMpocs,
  removeMpocs,
  getGroupById,
  updateGroup,
  deleteGroup,
  listGroups,
};
