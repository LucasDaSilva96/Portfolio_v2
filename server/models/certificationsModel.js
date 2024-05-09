const mongoose = require("mongoose");

const CertificationCoveredSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, , "Covered text must be present."],
  },
});

CertificationCoveredSchema.pre(/^find/, function (next) {
  this.select("-__v");
  next();
});

const CertificationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A certification must have a title"],
    unique: [true, "This title is already in the database"],
  },
  instructor: {
    type: String,
    required: [true, "A certification must have a teacher or instructor."],
  },
  photo: {
    type: String,
    required: [true, "A certification must have an image."],
  },
  organization: {
    type: String,
    required: [true, "A certification must have an organization. "],
  },
  covered: [CertificationCoveredSchema],
});

CertificationsSchema.pre(/^find/, function (next) {
  this.select("-__v");
  next();
});

module.exports = mongoose.model("certification", CertificationsSchema);
