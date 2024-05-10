const express = require("express");
const {
  getAllCertifications,
  createNewCertification,
} = require("../controller/certificationsController.js");

const router = express.Router();

// Route to get all certifications
router.get("/", getAllCertifications);
// Route to create a new certification
router.post("/", createNewCertification);

module.exports = router;
