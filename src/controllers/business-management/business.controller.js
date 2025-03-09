import businessService from "../../services/business-management/business.service.js";

const createBusiness = async (req, res) => {
  try {
    const { name, address, contact, spocId } = req.body;

    const newBusiness = await businessService.registerBusiness({
      name,
      address,
      contact,
      owner: req.user.id, // Extracted from authMiddleware
      spoc: spocId,
    });

    res.status(201).json({
      message: "Business created successfully",
      business: newBusiness,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBusiness = async (req, res) => {
  try {
    const business = await businessService.getBusinessById(req.params.id);
    res.json(business);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateBusiness = async (req, res) => {
  try {
    const updates = req.body;
    const updatedBusiness = await businessService.updateBusinessDetails(
      req.params.id,
      updates
    );
    res.json({
      message: "Business updated successfully",
      business: updatedBusiness,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBusiness = async (req, res) => {
  try {
    await businessService.deleteBusiness(req.params.id);
    res.json({ message: "Business deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listBusinesses = async (req, res) => {
  try {
    const businesses = await businessService.listBusinesses();
    res.json(businesses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  createBusiness,
  getBusiness,
  updateBusiness,
  deleteBusiness,
  listBusinesses,
};
