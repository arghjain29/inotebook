import React, {useContext, useEffect, useState} from 'react'
import noteContext from '../context/notes/NoteContext'



const UserInfo = () => {

    const context = useContext(noteContext);
    const { fetchuser } = context;
    
    const [userData, setUserData] = useState({ name: '', _id: '', email: '' });

    useEffect(() => {
        // Immediately invoked async function inside useEffect
        (async () => {
            const json = await fetchuser();
            setUserData(json); 
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <div className="card align-items-center  shadow-lg">

                <div className="card-body align-items-center">
                    <h1 className="card-title mb-3 display-3">User Profile</h1>
                    <div className="text-center verticle-align ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-NfjcF_sUqB0Yqy-NJ_YXhu62SQffp85Kg&usqp=CAU" alt="" />
                    </div>
                    <div className="text-left mt-5">
                        <strong className="card-text  fs-5 d-flex ">UserName: <em className=' mx-1 form-control'>{userData.name}</em></strong>
                        <strong className="card-text mt-4  fs-5 d-flex ">Email: <em className=' mx-1 form-control'>{userData.email}</em></strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo

