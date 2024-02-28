import React, { useState, UseEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import AllNotes from './components/AllNotes'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import './App.css'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route default path="/" element={ <AllNotes />} />
            <Route path="/notes/new" element={ <NewNote />} />
            <Route path="/notes/:id" element={ <EditNote />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
