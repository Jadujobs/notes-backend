const express = require("express");
const {
  getAllNotes,
  postNote,
  getNote,
  updateNote,
  deleteNote,
} = require("../controller/notes");
const router = express.Router();

router.get("/", getAllNotes);

router.post("/", postNote);

router.get("/:id", getNote);
router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
