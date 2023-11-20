// import React, { useEffect } from 'react';


// const Chat = () => {
//     useEffect (() => {return () => {alert("Chat window closed")}})

//     useEffect (() => {alert("Chat window opened")}, [])
//     return (
//         <div>
//             surya
//         </div>
//     );
// };

// // function Chat () {
// //     return (
// //         <div>
// //             surya
// //         </div>
// //     )
// // }
// export default Chat;





import React from 'react';



const Chat = ({onClose}) => {


    return (
        <div>
            surya
            <button onClick={() => onClose()}>&times;</button>
        </div>
    );
};

export default Chat;