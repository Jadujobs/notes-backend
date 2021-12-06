const Note = require("../models/note");
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.send("Something went unexpected!");
  }
};
exports.postNote = async (req, res) => {
  const { title, description } = req.body;

  try {
    const note = new Note({
      title,
      description,
    });

    await note.save();

    res.send("Note has been saved!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.send("Something went unexpected!");
  }
  //   res.send(req.body.title + "has been added a note");
};
exports.getNote = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.send("Note doesn't exist");
    }
    res.send(note);
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.send("Something went unexpected!");
  }
};
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.send("Note doesn't exist");
    }

    note.title = title;
    note.description = description;

    await note.save();

    res.send("Note has been updated!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.send("Something went unexpected!");
  }
};
exports.deleteNote = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.send("Note doesn't exist");
    }
    res.send("Note has been deleted!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.send("Something went unexpected!");
  }
};
