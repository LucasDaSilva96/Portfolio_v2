const mongoose = require('mongoose');

// Define the schema for project images
const ProjectImagesSchema = new mongoose.Schema({
  original: {
    type: String,
    required: [true, 'Original image is necessary.'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail image is necessary.'],
  },
  originalAlt: {
    type: String,
    required: [true, 'Image description is necessary'],
  },
  originalTitle: {
    type: String,
    required: [true, 'Original image title is necessary.'],
  },
});

// Define the schema for projects
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project must have a title'],
    unique: [true, 'This title is already in the database.'],
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, 'A project must have a description'],
  },

  demo: {
    type: String,
  },

  code: {
    type: String,
    required: [true, 'A project must have a source code'],
  },

  images: [ProjectImagesSchema],
  created_at: {
    type: Date,
    default: new Date().toUTCString(),
  },
});

// Create index on the 'title' field
ProjectSchema.index({ title: 1 });

// Exclude '__v' field from query results, sort results by 'created_at' field in descending order
ProjectSchema.pre(/^find/, function (next) {
  this.select(['-__v']);
  this.sort({ created_at: -1 });
  next();
});

// Create and export the Project model
module.exports = mongoose.model('project', ProjectSchema);
