import branchService from "../../services/business-management/branch.service.js";

const createBranch = async (req, res) => {
  try {
    const { name, address, contact, businessId } = req.body;

    const newBranch = await branchService.addBranch({
      name,
      address,
      contact,
      business: businessId,
    });

    res
      .status(201)
      .json({ message: "Branch created successfully", branch: newBranch });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBranch = async (req, res) => {
  try {
    const branch = await branchService.getBranchById(req.params.id);
    res.json(branch);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateBranch = async (req, res) => {
  try {
    const updates = req.body;
    const updatedBranch = await branchService.updateBranchDetails(
      req.params.id,
      updates
    );
    res.json({ message: "Branch updated successfully", branch: updatedBranch });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBranch = async (req, res) => {
  try {
    await branchService.removeBranch(req.params.id);
    res.json({ message: "Branch deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const listBranches = async (req, res) => {
  try {
    const branches = await branchService.getBranchesByBusiness(
      req.params.businessId
    );
    res.json(branches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  createBranch,
  getBranch,
  updateBranch,
  deleteBranch,
  listBranches,
};
