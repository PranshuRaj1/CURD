const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //FIND THE NOTES
  const notes = await Note.find();

  //RESPOND TO THEM
  res.json({ notes });
};

const fetchNote = async (req, res) => {
  //get id off the url
  const nodeId = req.params.id;
  //find the node using the id
  const note = await Note.findById(nodeId);

  //respond the note
  res.json({ note });
};

const createNote = async (req, res) => {
  //get the sent in dat off request body

  const { title, body } = req.body;

  //create a note with it
  const note = await Note.create({
    title,
    body,
  });

  //respond with the new note
  res.json({ note });
};

const updateNote = async (req, res) => {
  //Get the id of the url
  const noteId = req.params.id;

  //get the data off the req body
  const { title, body } = req.body;

  //FInd and update
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });

  //Find updated note
  const updatedNote = await Note.findById(noteId);

  //respond to it
  res.json({ updatedNote });
};

const deleteNote = async (req, res) => {
  //Find the note id
  const noteID = req.params.id;

  //Delete the record

  await Note.deleteOne({ _id: noteID });

  //Respond
  res.json({ success: "deleted" });
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
