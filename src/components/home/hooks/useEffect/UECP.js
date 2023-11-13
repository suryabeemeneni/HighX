import React,{ useEffect, useState } from 'react';
import '../useState/Increment.css';
import Chats from './Chat';


const UECP = () => {

    const [open, setOpen] = useState(true);

    return (
        <div className='somebasicuseState'>
            {/* <button>open & close</button> */}
            {/* <button onClick={() => setOpen(!open)}>open & close</button> */}

            {open && <Chats/>}
            <button onClick={() => setOpen(!open)}>open & close</button>
        </div>
    );
};
// function Chats () {
//     useEffect (() => {return () => {console.log("Chat window closed")}})

//     useEffect (() => {alert("Chat window opened")},[])

//     return (
//         <div>
//             surya
//         </div>
//     )
// }

export default UECP;