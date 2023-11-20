import React, { useEffect } from 'react';


const Chat = () => {
    useEffect (() => {return () => {alert("Chat window closed")}})

    useEffect (() => {alert("Chat window opened")}, [])
    return (
        <div>
            surya
        </div>
    );
};

// function Chat () {
//     return (
//         <div>
//             surya
//         </div>
//     )
// }
export default Chat;