const express = require("express");
const cors = require("cors");
const app = express();
const projectsRoute = require("./routes/projectsRoute");
const certificationsRoute = require("./routes/certificationsRoute");

// Middlewares
app.use(express.static("public"));
app.enable("trust proxy");

app.use(
  express.json({
    limit: "10kb",
  })
);

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

//  Routes
app.use("/api/v1/project", projectsRoute);
app.use("/api/v1/certification", certificationsRoute);

module.exports = app;
