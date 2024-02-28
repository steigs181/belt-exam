import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../NewNote.css'

const NewNote = () => {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteBody, setNoteBody] = useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/createNote/", { noteTitle, noteBody})
            .then( (res) => {
                console.log(res.data)
                navigate('/')
            })
            .catch( (err) => {
                console.log(err.res)
            })
    };

    const handleNoteTitleChange = (e) => {
        setNoteTitle(e.target.value);
        
        if (e.target.value.trim() === '') {
          setErrors({ ...errors, noteTitle: 'Note Title is required' });
        } else {
          setErrors({ ...errors, noteTitle: '' });
        }
      };
      
      const handleNoteBodyChange = (e) => {
        setNoteBody(e.target.value);
        
        if (e.target.value.trim() === '') {
          setErrors({ ...errors, noteBody: 'Note Body is required' });
        } else {
          setErrors({ ...errors, noteBody: '' });
        }
      };

  return (
    <div className="container">
        <div className="col-1">
            <div className="header">
                <h1>Write Notes</h1>
                <Link to="/">Go Back Home</Link>
            </div>
            <div className="header-text">
                <p>Write a new note!</p>
            </div>
        </div>
        <form className="form-style" onSubmit={handleSubmit}>
            <div className="note-card">
                <div className="note-title">
                    <label htmlFor="noteTitle">Note Title: </label>
                    {errors.noteTitle && <p className="error">{errors.noteTitle}</p>}
                    <input className="title-bar" type="text"  id="noteTitle" onChange={handleNoteTitleChange} />
                </div>
                <div className="note-body">
                    <label htmlFor="noteBody">Note Body: </label>
                    {errors.noteBody && <p className="error">{errors.noteBody}</p>}
                    <textarea className="body-area" id="noteBody" onChange={handleNoteBodyChange} cols="30" rows="10"></textarea>
                </div>
                <div>
                <button className="button-submit">Write this Note!</button>
                </div>
            </div>
            </form>
    </div>
  )
}

export default NewNote