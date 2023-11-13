import React, { useState } from 'react';
import './Controlledform.css'

const Controlledformvalid = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const [emailerror, setEmailerror] = useState('');
    // const [passworderror, setPassworderror] = useState('');
    //                      (or)
    const [errors, setErrors] = useState({email:"", password:""});

    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    function handleSubmit (e)  {e.preventDefault();
        if (email.trim() === "") {
            // This is asynchronous function
            // If state variable is object, but we updating in multiple places it doesn't update properly.
            // date need to be give by using callback function
            // () => {}
            // setErrors((errors) => ({}))

            // setErrors({...errors,email:"Enter Email address"})
            setErrors((errors) => ({...errors,email:"Enter Email address"}))
        }
        else if (!emailpattern.test(email)) {
            setErrors((errors) => ({...errors,email:"Enter Valid Email address"}))
        }
        else {
            setErrors((errors) => ({...errors,email:""}))
        }

        if (password.trim() === " ") {
            setErrors((errors) => ({...errors,password:"Enter password"}))
        }
        else if (password.trim().length <8 ) {
            setErrors((errors) => ({...errors,password:"Password req 8 characters"}))
        }
        else {
            setErrors((errors) => ({...errors,password:""}))
        }
    }
    return (
        <>
        <div className='controlledform-main-div'>
            <div className='controlledform-sub-div'>
            <h2 style={{color:"#3498DB",margin:"0"}}>Login to HighX</h2>
            <p style={{margin:"0"}}>Login form validation</p><br/>
            <form>
                <div className='controlledform-input'>
                <label>Email</label><br/>
                <input type='email' placeholder='email'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}/><br/>
                {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
                </div>

                <br></br>

                <div className='controlledform-input'>
                <label>Password</label><br/>
                <input type='password' placeholder='*******'
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}/><br/>
                {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
                </div>

                <br></br>
                <br></br>

                <div>
                <button type='submit' onClick={handleSubmit} className='button-forms'>Login</button>
                </div>
            </form>
            </div>
            </div>
        </>
    );
};

export default Controlledformvalid;