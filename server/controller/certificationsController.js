const CertificationsModel = require("../models/certificationsModel");

exports.getAllCertifications = async (req, res, next) => {
  try {
    const certifications = await CertificationsModel.find();

    res.status(200).json({
      status: "success",
      data: certifications,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};

exports.createNewCertification = async (req, res, next) => {
  try {
    const createdCertification = await CertificationsModel.create({
      ...req.body,
    });

    res.status(201).json({
      status: "success",
      data: createdCertification,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};
