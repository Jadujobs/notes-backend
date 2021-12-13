const Note = require("../models/note");
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.json("Something went unexpected!");
  }
};
exports.postNote = async (req, res) => {
  const { title, description } = req.body;

  console.log(req.body);

  try {
    const note = new Note({
      title,
      description,
    });

    await note.save();

    res.json("Note has been saved!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.json("Something went unexpected!");
  }
  //   res.json(req.body.title + "has been added a note");
};
exports.getNote = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.json("Note doesn't exist");
    }
    res.json(note);
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.json("Something went unexpected!");
  }
};
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  console.log(title, description);
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.json("Note doesn't exist");
    }

    note.title = title;
    note.description = description;

    await note.save();

    res.json("Note has been updated!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.json("Something went unexpected!");
  }
};
exports.deleteNote = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.json("Note doesn't exist");
    }
    res.json("Note has been deleted!");
  } catch (error) {
    console.log("Something went unexpected!", error.message);
    res.json("Something went unexpected!");
  }
};
