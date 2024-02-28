import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../AllNotes.css'

const AllNotes = () => {
    const [ noteList, setNoteList] = useState([])
    useEffect( () => {
        axios.get("http://localhost:8000/api/getNotes")
            .then( res => {
                console.log(res.data)
                setNoteList(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

  return (
    <div className="container"> 
        <div className="nav-box">
            <span className="title-button">
                <h1>Note Wall</h1>
                <button><Link to="/notes/new">Write Note</Link></button>
            </span>
            <div className="nav-message">
                <p>Leave a note</p>
            </div>
        </div>
        {
            noteList.map( (note) => {
                return (
                    <div className="note-content" key={note._id}>
                        <div>
                            <h2>{note.noteTitle}</h2>
                            <p>{note.noteBody}</p>
                        </div>
                        <div>
                            <Link to={`/notes/${note._id}`}>Edit</Link>
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}

export default AllNotes