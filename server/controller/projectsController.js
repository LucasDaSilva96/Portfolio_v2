const PROJECT_MODEL = require("../models/projectsModel");

// Controller function to get all projects
exports.getAllProjects = async (req, res, next) => {
  try {
    // Find all projects from the database
    const getAllProjects = await PROJECT_MODEL.find();

    // Send response with status 200 and retrieved projects
    res.status(200).json({
      status: "success",
      data: getAllProjects,
    });
  } catch (e) {
    // Send error response with status 400 and error message
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};

// Controller function to create a new project
exports.createProject = async (req, res, next) => {
  try {
    // Create a new project using data from request body
    const project = await PROJECT_MODEL.create({ ...req.body });

    // Send response with status 201 and created project
    res.status(201).json({
      status: "success",
      data: project,
    });
  } catch (e) {
    // Send error response with status 400 and error message
    res.status(400).json({
      status: "fail",
      message: e.message,
    });
  }
};
