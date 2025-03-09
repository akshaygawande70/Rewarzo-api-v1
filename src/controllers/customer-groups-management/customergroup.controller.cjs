const groupService = require("../../services/customer-groups-management/customergroup.service.cjs"); // Import the group service

exports.createGroup = async (req, res) => {
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

exports.addMembers = async (req, res) => {
  try {
    const { groupId, memberIds } = req.body;

    const updatedGroup = await groupService.addMembers(groupId, memberIds);

    res.json({ message: "Members added successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeMembers = async (req, res) => {
  try {
    const { groupId, memberIds } = req.body;

    const updatedGroup = await groupService.removeMembers(groupId, memberIds);

    res.json({ message: "Members removed successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addMpocs = async (req, res) => {
  try {
    const { groupId, mpocIds } = req.body;

    const updatedGroup = await groupService.addMpocs(groupId, mpocIds);

    res.json({ message: "MPOCs added successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeMpocs = async (req, res) => {
  try {
    const { groupId, mpocIds } = req.body;

    const updatedGroup = await groupService.removeMpocs(groupId, mpocIds);

    res.json({ message: "MPOCs removed successfully", group: updatedGroup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
