const express = require("express");
const bodyParser = require("body-parser");
const notesRoute = require("./routes/notes");
const app = express();

app.use(bodyParser.json());
app.use("/notes", notesRoute);
// /notes -> /notes (GET), /notes (POST)
// /user -> /user/register , /user/login, /user/111
app.listen(3000, console.log("Server started!..."));
// GET
// POST
// PUT
// DELETE
