const mongoose = require("mongoose");

const ProjectImagesSchema = new mongoose.Schema({
  original: {
    type: String,
    required: [true, "Original image is necessary."],
  },
  thumbnail: {
    type: String,
    required: [true, "Thumbnail image is necessary."],
  },
  originalAlt: {
    type: String,
    required: [true, "Image description is necessary"],
  },
  originalTitle: {
    type: String,
    required: [true, "Original image title is necessary."],
  },
});

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A project must have a title"],
    unique: [true, "This title is already in the database."],
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "A project must have a description"],
  },

  demo: {
    type: String,
  },

  code: {
    type: String,
    required: [true, "A project must have a source code"],
  },

  images: [ProjectImagesSchema],
});

ProjectSchema.index({ title: 1 });

ProjectSchema.pre(/^find/, function (next) {
  this.select(["-_v"]);
  next();
});

module.exports = mongoose.model("project", ProjectSchema);

("/public/projectsImg/");
