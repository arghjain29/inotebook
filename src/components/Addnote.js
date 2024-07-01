import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'


const Addnote = (props) => {
    const context = useContext(noteContext);
    const { addnote } = context;

    const [note,setnote] = useState({title:"",description:"",tag:""});
    
    
    const handleClick = (e) => {
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""});
        props.showAlert("Note Added Successfully","success");
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const chkdata = (note.title.length === 0 || note.description.length === 0 || note.tag.length === 0);
    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3 my-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={note.title} name= "title" aria-describedby="emailHelp" onChange={onChange}/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" value={note.description} id="description" name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} />
                    </div>
                    
                    
                    <button type="submit" className="btn btn-success" disabled={chkdata} onClick={handleClick}>Add Note</button>
                </form>
            </div>


        </div>
    )
}

export default Addnote
