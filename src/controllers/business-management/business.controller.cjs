const BusinessService = require("../../services/business-management/business.service.cjs");

exports.createBusiness = async (req, res) => {
  try {
    const { name, address, contact } = req.body;
    const business = await BusinessService.createBusiness(
      name,
      address,
      contact,
      req.user.id
    );

    res.status(201).json({
      message: "Business created successfully",
      business,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBusiness = async (req, res) => {
  try {
    const business = await BusinessService.getBusiness(req.params.id);
    res.json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
