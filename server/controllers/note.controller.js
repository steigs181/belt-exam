const Note = require("../models/note.model")

module.exports = {
    //GET
    allNotes: (req, res) => {
        Note.find({})
        .then((note)=> {
            res.json(note)
        })
        .catch( err => {
            res.json({ message: "Something went wrong in the get all controllers", error: err})
        })
    },
    getOneNote: (req, res) => {
        Note.findOne({ _id: req.params.id})
            .then(oneNote => {
                res.status(200).json({note: oneNote})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in get one controllers", error: err})
            })
    },

    //CREATE
    newNote: (req, res) => {
        Note.create(req.body)
            .then( newNote => {
                res.status(200).json({ note: newNote})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in create controllers", error: err})
            })
    },

    //UPDATE
    updateNote: (req, res) => {
        Note.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true, runValidators: true, })
            .then( updateNote => {
                res.status(200).json({ note: updateNote})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in update controllers", error: err})
            })
    },

    //DELETE
    deleteNote: (req, res) => {
        Note.deleteOne({ _id: req.params.id})
            .then( deleted => {
                res.status(200).json(deleted)
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in delete controllers", error: err})
            })
    }
}