require("dotenv").config();
const app = require("./index");

const mongoose = require("mongoose");

const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log("DB successfully connected"));

const port = process.env.PORT || 8000;

const SERVER = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
