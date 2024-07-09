import React, { useContext, useState } from 'react'
import NoteContext from "../Contexts/Notes/NoteContext"
import NotesItem from './NotesItem';
import './Notes.css'; // Import the CSS file





const Home = () => {
  const context = useContext(NoteContext)
  const {notes, addNote}= context;

  const [val,setval] = useState({title:"",description:"", tag:"default"})

  const onChange=(e)=>{
    setval({...val, [e.target.name]:e.target.value})
}
const OnAddUp =(e)=>{
    e.preventDefault();

  addNote(val.title, val.description)
}
      
  return (
    <>
    <div className=' container my-3'>
      <h2>Add a note</h2>
      <form classNameName='mx-3'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={OnAddUp}>Submit</button>
      </form>
    </div>
    <div className='container my-3'>
      <h2>Enter Your Notes</h2>
      
          {notes.map((note) =>{
            return <NotesItem  key={note.id} note = {note}/>
          }
           /* (
          <ul key={note.id}>
            <li>{note.id}</li>
            <li>{note.user}</li>
            <li>{note.title}</li>
            <li>{note.description}</li>
          </ul>
        ) */
        )}
  
    </div>
   </>
  )
}

export default Home