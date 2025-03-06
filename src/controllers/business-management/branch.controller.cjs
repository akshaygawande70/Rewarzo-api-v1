const BranchService = require("../../services/business-management/branch.service.cjs");

exports.addBranch = async (req, res) => {
  try {
    const { name, address, contact, businessId } = req.body;
    const branch = await BranchService.addBranch(
      name,
      address,
      contact,
      businessId
    );

    res.status(201).json({ message: "Branch added successfully", branch });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBranchById = async (req, res) => {
  try {
    const result = await BranchService.getBranch(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBranch = async (req, res) => {
  try {
    const { name, address, contact } = req.body;
    const branch = await BranchService.updateBranch(
      req.params.id,
      name,
      address,
      contact
    );

    res.json({ message: "Branch updated successfully", branch });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBranch = async (req, res) => {
  try {
    const result = await BranchService.deleteBranch(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listBranches = async (req, res) => {
  try {
    const branches = await BranchService.listBranches(req.params.businessId);
    res.json(branches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
