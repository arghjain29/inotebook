import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    
    const notesinitial=[
        {
            "_id": "667e9b43aba6bf69fe5b7f6f",
            "user": "667c421fd345b2dd2931be2b",
            "title": "my title",
            "description": "heeheheheh good",
            "tag": "personal",
            "date": "2024-06-28T11:15:15.194Z",
            "__v": 0
          },
          {
            "_id": "667e9b61aba6bf69fe5b7f71",
            "user": "667c421fd345b2dd2931be2b",
            "title": "napo che",
            "description": "saste kaam",
            "tag": "ayooooo",
            "date": "2024-06-28T11:15:45.374Z",
            "__v": 0
          },
        {
            "_id": "667e9b43aba6bf69fe5b7f6f",
            "user": "667c421fd345b2dd2931be2b",
            "title": "my title",
            "description": "heeheheheh good",
            "tag": "personal",
            "date": "2024-06-28T11:15:15.194Z",
            "__v": 0
          },
          {
            "_id": "667e9b61aba6bf69fe5b7f71",
            "user": "667c421fd345b2dd2931be2b",
            "title": "napo che",
            "description": "saste kaam",
            "tag": "ayooooo",
            "date": "2024-06-28T11:15:45.374Z",
            "__v": 0
          },
        {
            "_id": "667e9b43aba6bf69fe5b7f6f",
            "user": "667c421fd345b2dd2931be2b",
            "title": "my title",
            "description": "heeheheheh good",
            "tag": "personal",
            "date": "2024-06-28T11:15:15.194Z",
            "__v": 0
          },
          {
            "_id": "667e9b61aba6bf69fe5b7f71",
            "user": "667c421fd345b2dd2931be2b",
            "title": "napo che",
            "description": "saste kaam",
            "tag": "ayooooo",
            "date": "2024-06-28T11:15:45.374Z",
            "__v": 0
          }
    ]

    const [notes, setnotes] = useState(notesinitial)

    return (

        <NoteContext.Provider value={{ notes,setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;