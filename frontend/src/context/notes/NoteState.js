import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL;

  const notesinitial = []
  const [notes, setnotes] = useState(notesinitial);

  //* Fetch all user details
  const fetchuser = async () => {
    //! API call here
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    return json;
  }





  //* Fetch All Note
  const fetchnote = async () => {

    //! API call here
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        // 'auth-token': localStorage.getItem('token')
        'auth-token': localStorage.getItem('token')
      }
    });
    setnotes(await response.json())

  }


  //* Add a Note
  const addnote = async (title, description, tag) => {

    //! API call here
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    console.log(response.json);
    setnotes(notes.concat({ title, description, tag }))

  }

  //* Delete a Note

  const deletenote = async (_id) => {

    try {
      //! API call here
      const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'auth-token': localStorage.getItem('token')
          'auth-token': localStorage.getItem('token')
        }

      });
      console.log(response.json);
      const newnotes = notes.filter((note) => { return note._id !== _id })
      setnotes(newnotes);

    } catch (error) {

    }

  }

  //* Edit a Note
  const editnote = async (_id, title, description, tag) => {

    //! API call here
    const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': localStorage.getItem('token')
        'auth-token': localStorage.getItem('token')
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
    console.log(response.json);
  }

  return (

    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, fetchnote, fetchuser }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;