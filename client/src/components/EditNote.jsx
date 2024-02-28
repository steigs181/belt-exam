import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../EditNote.css'

const EditNote = (props) => {
    const {id} = useParams();
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("")
    const [error, setError] = useState({});
    const navigate = useNavigate();
    useEffect( () => {
        axios.get(`http://localhost:8000/api/getOneNote/${id}`)
            .then( (res) => {
                console.log(res.data)
                setNoteTitle(res.data.note.noteTitle)
                setNoteBody(res.data.note.noteBody)
            })
            .catch( (err) => {
                console.log(err.res.data.err.errors)
                setError(err.res.data.err.errors)
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/updateNote/${id}`, { noteTitle, noteBody})
            .then( (res) => {
                console.log(res)
                navigate("/")
            })
            .catch( err => {
                console.log(err.res.data.err.errors)
                setError(err.res.data.err.errors)
            })
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/deleteNote/${id}`)
            .then( res => {
                console.log("Successfully deleted")
                navigate("/")

            })
            .catch( err => console.log(err.res));
        };
  return (
    <div className="container">
        <div className="col-1">
            <h1>Note</h1>
            <Link to="/">Go Back Home</Link>
        </div>
        <form className="form-style" onSubmit={handleSubmit}>
            <div className="note-card">
                <div className="note-title">
                    <label htmlFor="noteTitle">Note Tite:</label>
                    <input className="title-bar" type="text" id="noteTitle" value={noteTitle} onChange={ (e) => setNoteTitle(e.target.value)} />
                </div>
                <div className="note-body">
                    <label htmlFor="noteBody">Note Body: </label>
                    <textarea className="body-area" id="noteBody" value={noteBody} onChange={ (e) => setNoteBody(e.target.value)} cols="30" rows="10"></textarea>
                </div>
            </div>
            <div>
                <span>
                    <button className="button-submit">Edit Note</button>
                    <button className="button-delete" onClick={handleDelete}>Delete Note</button>
                </span>
            </div>
        </form>
    </div>
  )
}

export default EditNote