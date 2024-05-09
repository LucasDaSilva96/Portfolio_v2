const express = require("express");
const cors = require("cors");
const app = express();
const projectsRoute = require("./routes/projectsRoute");

// Middlewares
app.use(express.static("public"));
app.enable("trust proxy");

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(cors());

// ** Routes
app.use("/api/v1/project", projectsRoute);

module.exports = app;
