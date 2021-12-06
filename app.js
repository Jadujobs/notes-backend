const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const notesRoute = require("./routes/notes");
const app = express();

app.use(bodyParser.json());
app.use("/notes", notesRoute);
// /notes -> /notes (GET), /notes (POST)
// /user -> /user/register , /user/login, /user/111

// GET
// POST
// PUT
// DELETE

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes");
    console.log("Database Connected!");
    app.listen(3009, console.log("Server started!..."));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connect();
