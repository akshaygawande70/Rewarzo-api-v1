import groupService from "../../services/customer-groups-management/customergroup.service.js"; // Import the group service

const createGroup = async (req, res) => {
  try {
    const { businessId, name, description, members, mpocs } = req.body;

    const group = await groupService.createGroup(
      businessId,
      name,
      description,
      members,
      mpocs
    );

    res.status(201).json({ message: "Group created successfully", group });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addMembers = async (req, res) => {
  try {
    const { groupId, memberIds } = req.body;

    const updatedGroup = await groupService.addMembers(groupId, memberIds);

    res.json({ message: "Members added successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeMembers = async (req, res) => {
  try {
    const { groupId, memberIds } = req.body;

    const updatedGroup = await groupService.removeMembers(groupId, memberIds);

    res.json({ message: "Members removed successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addMpocs = async (req, res) => {
  try {
    const { groupId, mpocIds } = req.body;

    const updatedGroup = await groupService.addMpocs(groupId, mpocIds);

    res.json({ message: "MPOCs added successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeMpocs = async (req, res) => {
  try {
    const { groupId, mpocIds } = req.body;

    const updatedGroup = await groupService.removeMpocs(groupId, mpocIds);

    res.json({ message: "MPOCs removed successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGroup = async (req, res) => {
  try {
    const group = await groupService.getGroupById(req.params.id);
    res.json(group);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update group details
const updateGroup = async (req, res) => {
  try {
    const updates = req.body;
    const updatedGroup = await groupService.updateGroupDetails(
      req.params.id,
      updates
    );
    res.json({
      message: "Group updated successfully",
      group: updatedGroup,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a group
const deleteGroup = async (req, res) => {
  try {
    await groupService.deleteGroup(req.params.id);
    res.json({ message: "Group deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// List groups
const listGroups = async (req, res) => {
  try {
    const groups = await groupService.getAllGroups();
    res.json(groups);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  createGroup,
  addMembers,
  removeMembers,
  addMpocs,
  removeMpocs,
  getGroup,
  updateGroup,
  deleteGroup,
  listGroups,
};
