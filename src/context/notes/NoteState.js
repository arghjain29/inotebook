import React from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const s1 = {
        "name": "Aman",
        "class": "5th"
    };

    const [state, setState] = React.useState(s1);   
    const update =() =>{
        setTimeout(() => {
            setState({
                "name": "papaji",
                "class": "6th"
            });
        }, 1000);
    }

    return (

        <NoteContext.Provider value={{ state,update }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;