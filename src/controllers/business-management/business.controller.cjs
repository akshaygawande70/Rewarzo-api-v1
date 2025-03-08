const BusinessService = require("../../services/business-management/business.service.cjs");

exports.createBusiness = async (req, res) => {
  try {
    const { name, address, contact, spocId } = req.body;

    const newBusiness = await businessService.registerBusiness({
      name,
      address,
      contact,
      owner: req.user.id, // Extracted from authMiddleware
      spoc: spocId,
    });

    res
      .status(201)
      .json({
        message: "Business created successfully",
        business: newBusiness,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBusiness = async (req, res) => {
  try {
    const business = await businessService.getBusinessById(req.params.id);
    res.json(business);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateBusiness = async (req, res) => {
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
