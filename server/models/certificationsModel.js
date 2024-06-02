const mongoose = require('mongoose');

// Define the schema for the covered text within a certification
const CertificationCoveredSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Covered text must be present.'],
  },
});

// Exclude '__v' field from query results
CertificationCoveredSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

// Define the schema for certifications
const CertificationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A certification must have a title'],
    unique: [true, 'This title is already in the database'],
  },
  instructor: {
    type: String,
    required: [true, 'A certification must have a teacher or instructor.'],
  },
  photo: {
    type: String,
    required: [true, 'A certification must have an image.'],
  },
  organization: {
    type: String,
    required: [true, 'A certification must have an organization. '],
  },
  covered: [CertificationCoveredSchema],
  date: {
    type: Date,
    default: new Date().toUTCString(),
  },
});

// Exclude '__v' field from query results
CertificationsSchema.pre(/^find/, function (next) {
  this.select('-__v');
  this.sort({ date: 1 });
  next();
});

// Create and export the Certification model
module.exports = mongoose.model('certification', CertificationsSchema);
