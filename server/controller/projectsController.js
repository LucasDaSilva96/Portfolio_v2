const PROJECT_MODEL = require("../models/projectsModel");

exports.getAllProjects = async (req, res, next) => {
  try {
    const getAllProjects = await PROJECT_MODEL.find();

    res.status(200).json({
      status: "success",
      data: getAllProjects,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      data: [],
    });
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const project = await PROJECT_MODEL.create({ ...req.body });

    res.status(201).json({
      status: "success",
      data: project,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};
