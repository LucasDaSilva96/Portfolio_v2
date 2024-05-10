const express = require("express");
const {
  getAllProjects,
  createProject,
} = require("../controller/projectsController");

const router = express.Router();

// Route to get all projects
router.get("/", getAllProjects);
// Route to create a new project
router.post("/", createProject);

module.exports = router;
