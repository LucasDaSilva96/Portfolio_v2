const express = require("express");
const {
  getAllCertifications,
  createNewCertification,
} = require("../controller/certificationsController.js");

const router = express.Router();

router.get("/", getAllCertifications);
router.post("/", createNewCertification);

module.exports = router;
