exports.getAllNotes = (req, res) => {
  res.send("(GET) All Notes");
};
exports.postNote = (req, res) => {
  console.log(req.body);
  res.send(`${req.body.title} has been added a note`);
  //   res.send(req.body.title + "has been added a note");
};
exports.getNote = (req, res) => {
  console.log(req.params.id);
  res.send("(GET) Specific Note");
};
exports.updateNote = (req, res) => {
  res.send("(UPDATE) Update a note");
};
exports.deleteNote = (req, res) => {
  res.send("(DELETE) Remove a note");
};
