const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const notesRoute = require("./routes/notes");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use("/notes", notesRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// /notes -> /notes (GET), /notes (POST)
// /user -> /user/register , /user/login, /user/111

// GET
// POST
// PUT
// DELETE
console.log(process.env);
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database Connected!");
    app.listen(3009, console.log("Server started!..."));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connect();
