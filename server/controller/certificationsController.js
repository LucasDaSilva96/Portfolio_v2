const CertificationsModel = require("../models/certificationsModel");

// Controller function to get all certifications
exports.getAllCertifications = async (req, res, next) => {
  try {
    // Find all certifications from the database
    const certifications = await CertificationsModel.find();

    // Send response with status 200 and retrieved certifications
    res.status(200).json({
      status: "success",
      data: certifications,
    });
  } catch (e) {
    // Send error response with status 400 and error message
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};

// Controller function to create a new certification
exports.createNewCertification = async (req, res, next) => {
  try {
    // Create a new certification using data from request body
    const createdCertification = await CertificationsModel.create({
      ...req.body,
    });

    // Send response with status 201 and created certification
    res.status(201).json({
      status: "success",
      data: createdCertification,
    });
  } catch (e) {
    // Send error response with status 400 and error message
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};
