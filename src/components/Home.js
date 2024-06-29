// import React, { useContext } from 'react'
// import noteContext from '../context/notes/NoteContext'
import React from 'react'
import Notes from './Notes';

export default function Home() {

    // const context = useContext(noteContext);
    // const { notes, setnotes } = context;

    return (
        <div>
           <div className="container my-3">
                <Notes/>
            </div>

        </div>
    )
}
