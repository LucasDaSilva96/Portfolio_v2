require("dotenv").config();
const app = require("./index");

const mongoose = require("mongoose");

// Retrieve database connection URI from environment variables
const DB = process.env.DB;

// Connect to MongoDB database
mongoose.connect(DB).then(() => console.log("DB successfully connected"));

// Define the port for the server to listen on
const port = process.env.PORT || 8000;

// Start the server and listen for requests
const SERVER = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
