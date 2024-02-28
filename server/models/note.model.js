const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Note title must be longer than 2 characters"]
    },
    noteBody: {
        type: String,
        required: [true, "Note body is required"],
        maxLength: [255, "Maximum of 255 characters allowed"]
    }
}, {timestamps: true})

const Note = mongoose.model('Note', NoteSchema)
module.exports = Note