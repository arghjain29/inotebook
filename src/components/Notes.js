import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import Addnote from './Addnote';


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchnote } = context;
  useEffect(() => {
    fetchnote();
    // eslint-disable-next-line
  })

  return (
    <>
    <Addnote/>
    <div className="row">
      {notes.map((note) => {
        return <NoteItem note={note} key={note._id} />;
      })}
    </div>
    </>
  ) 
}

export default Notes
