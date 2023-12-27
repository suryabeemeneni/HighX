// import React,{ useEffect, useState } from 'react';
// import '../useState/Increment.css';
// import Chats from './Chat';
// import LoginForm from '../../formvalidation/sampleform/LoginForm/LoginForm';
// import LoginPage from '../../formvalidation/sampleform/LoginForm/LoginPage';


// const UECP = (props) => {

//     const [open, setOpen] = useState(false);
    
//     const handleButtonclick = () => {
//         setOpen(false)
//     }


//     return (
//         <div className='somebasicuseState'>
//             {/* <button>open & close</button> */}
//             {/* <button onClick={() => setOpen(!open)}>open & close</button> */}

//             {/* {open && <Chats onClose={handleButtonclick}/>} */}
//             <button onClick={() => setOpen(!open)}>open</button>
//             {/* {open && <LoginForm onClose={handleButtonclick}/>} */}
//             {open && <LoginPage />}
//         </div>
//     );
// };
// // function Chats () {
// //     useEffect (() => {return () => {console.log("Chat window closed")}})

// //     useEffect (() => {alert("Chat window opened")},[])

// //     return (
// //         <div>
// //             surya
// //         </div>
// //     )
// // }

// export default UECP;