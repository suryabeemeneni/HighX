import React, { useEffect, useRef, useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import AppHome from '../../../AppHome';

const MainForm = () => {

    const [showHome, setShowHome] = useState(false)
    const [Login, setLogin] = useState(false)
    

//     const localStorgaeSignup = localStorage.getItem("signup")

//     useEffect ( () => {
// if (localStorgaeSignup) {
//             setShowHome(true)
//         }
//     },[])

    const showlogin = (e) => {
        e.preventDefault()
        // if (click) {
            setLogin(true)
        // }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setShowHome(true)
    }



    
//     const [signin, setSignIn] = useState(false);
//     const [data, setData] = useState([]);
//     const [email, setEmail] =useState('')
//     const [showHome, setShowHome] = useState(false)

//     useEffect(() => {setData(JSON.parse(localStorage.getItem('user')))},[]);

//     const navigate = useNavigate();

//     const handleSubmit = (e, type) => {
//         e.preventDefault()
//         console.log(e.target.email.value);

//         if (e.target.email.value && e.target.password.value) {
//             if(!localStorage.getItem('user')) {
//                 localStorage.setItem('user', JSON.stringify([{email:e.target.email.value, password:e.target.password.value}]))
//                 navigate('/home', {state:e.target.email.value})
//             } 
//             else {
//                 for(let val of data) {
//                     setEmail(val.email)
//                     if(val.email.includes(e.target.email.value)) {
//                         if(type == 'signUp'){
//                             alert('user already exists')
//                         setSignIn(true)
//                     }
//                     else {
//                         if(val.password === e.target.password.value) {
//                             navigate('/home', {state:e.target.email.value})
//                         }
//                         else {
//                             alert('password does not match')
//                         }
//                     }
//                     return true;
//                 }
//             }
//             if(type == 'signUp' && email!==e.target.email.value) {
//                 localStorage.setItem('user', JSON.stringify([...data,{email:e.target.email.value, password:e.target.password.value}]))
//                 navigate('/home', {state:e.target.email.value})
//             }
//         }
//     }
// }

    
    return (
        <>
        {/* {showHome ? <AppHome /> : Login? (<LoginForm handleSubmit ={handleSubmit}/>) : (<SignupForm showlogin={showlogin} handleSubmit ={handleSubmit}/>)} */}
            <AppHome />
        </>
    );
};

export default MainForm;