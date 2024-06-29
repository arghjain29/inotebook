import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesinitial = []
  const [notes, setnotes] = useState(notesinitial);

  //* Fetch All Note
  const fetchnote = async() => {
    
    //! API call here
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        // 'auth-token': localStorage.getItem('token')
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3YzQyMWZkMzQ1YjJkZDI5MzFiZTJiIn0sImlhdCI6MTcxOTQ5NzgyMX0.oUimNk_GOEiGI2B5CiZ90Tx1715fEmZYRAz9iAB_VQk"
      }
    });
    setnotes(await response.json())

  }




  //* Add a Note
  const addnote = async(title, description, tag) => {
    
    //! API call here
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3YzQyMWZkMzQ1YjJkZDI5MzFiZTJiIn0sImlhdCI6MTcxOTQ5NzgyMX0.oUimNk_GOEiGI2B5CiZ90Tx1715fEmZYRAz9iAB_VQk"
      },
      body: JSON.stringify({ title, description, tag })

    });
    
    setnotes(notes.concat({ title, description, tag }))

  }


  //* Delete a Note

  const deletenote = async (_id) => {
    
    //! API call here
      const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'auth-token': localStorage.getItem('token')
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3YzQyMWZkMzQ1YjJkZDI5MzFiZTJiIn0sImlhdCI6MTcxOTQ5NzgyMX0.oUimNk_GOEiGI2B5CiZ90Tx1715fEmZYRAz9iAB_VQk"
        }
  
      });
      




    const newnotes = notes.filter((note) => { return note._id !== _id })
    setnotes(newnotes);

  }

  //* Edit a Note
  const editnote = async (_id, title, description, tag) => {
   
    //! API call here
    const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3YzQyMWZkMzQ1YjJkZDI5MzFiZTJiIn0sImlhdCI6MTcxOTQ5NzgyMX0.oUimNk_GOEiGI2B5CiZ90Tx1715fEmZYRAz9iAB_VQk"
      },
      body: JSON.stringify({ title, description, tag })

    });

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === _id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    
  }

  return (

    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, fetchnote }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;