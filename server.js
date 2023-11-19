//Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesControllers");
const cors = require("cors");

// Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cors());

// connection to DB
connectToDb();

//routing

//fetch all Notes
app.get("/notes", notesController.fetchNotes);

//fetch note
app.get("/notes/:id", notesController.fetchNote);

//create a note
app.post("/notes", notesController.createNote);

//update the note
app.put("/notes/:id", notesController.updateNote);

//delete a record
app.delete("/notes/:id", notesController.deleteNote);

//start the server

app.listen(3000);
