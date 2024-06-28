import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setnotes } = context;

  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem note={note} key={note._id} />;
      })}
    </div>
  ) 
}

export default Notes
