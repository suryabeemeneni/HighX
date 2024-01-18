import React, { useEffect, useRef, useState } from 'react';
import './SignupForm/SignupForm.css'
import AppHome from '../../../AppHome';
import SignupForm from './SignupForm/SignupForm';
import LoginForm from '../../ReactJS/home/formvalidation/sampleform/LoginForm/LoginForm';

const SLForm = ({validateForm,firstName, lastName, email, phoneNumber, Password, confirmPassword},p) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // this is gives the user data inputs
        // console.log(name.current.value, email.current.value,Password.current.value);

        // if user must fill all fields  then only data needs to display we use && property

        if (validateForm() && firstName.current.value && lastName.current.value && email.current.value && phoneNumber.current.value && Password.current.value && confirmPassword.current.value) 
        {
            // console.log(name.current.value, email.current.value,Password.current.value);

            // to store data in local storage
            localStorage.setItem('firstName',firstName.current.value )
            localStorage.setItem('lastName',lastName.current.value )
            localStorage.setItem('email',email.current.value )
            localStorage.setItem('phoneNumber',phoneNumber.current.value )
            localStorage.setItem('password',Password.current.value )
            localStorage.setItem('confirmpassword',confirmPassword.current.value )
            localStorage.setItem('signup',email.current.value )

            // after submit we need to relaod page manally to navigate to home page {so we are using}
            window.location.reload()

            // signUp();
        }
    }


    // if Login is sucessfull we need to navigate to Homepage

    const [showHome, setShowHome] = useState(false)
    

    // this localStorageSignup will take data from handlesubmit 
    const localStorgaeSignup = localStorage.getItem("signup")

    useEffect ( () => {
        if (localStorgaeSignup) {
            setShowHome(true)
        }
    },[])



    return (
        <>
        {/* if sign up is true we will navigate (?) to home page else show the sign up form */}
        {showHome ? <AppHome /> :
                <SignupForm handleSubmit={handleSubmit}/>
            }
        </>
    );
};

export default SLForm;