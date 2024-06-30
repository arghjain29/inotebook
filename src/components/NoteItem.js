import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext'



export default function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deletenote } = context;

    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
                        <i className="fa-solid fa-trash-can mx-3" onClick={() => { deletenote(note._id) }}></i>
                    </div>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}
