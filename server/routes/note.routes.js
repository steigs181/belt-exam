const NoteWallController = require("../controllers/note.controller")


module.exports = (app) => {
    app.get("/api/getNotes", NoteWallController.allNotes)
    app.get("/api/getOneNote/:id", NoteWallController.getOneNote)
    app.post("/api/createNote", NoteWallController.newNote)
    app.patch("/api/updateNote/:id", NoteWallController.updateNote)
    app.delete("/api/deleteNote/:id", NoteWallController.deleteNote)
}