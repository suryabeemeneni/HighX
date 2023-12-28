import React, { useState } from 'react';
import './LoginForm.css'
import { Link} from "react-router-dom";
import axios from 'axios';
import SignupForm from '../SignupForm/SignupForm';

const LoginForm = ({onClose}) => {
    
    const [passwordview, setpasswordview] = useState(false);
    const [formData, setFormData] = useState({username:"",password:""})
    const [showSignup, setShowSignup] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((preData) => ({...preData,[name]:value}))
    }

    const [errors, setErrors] = useState({username:"",password:""});

    const validateName = () => {
        if (formData.username.trim() === "") {
            setErrors((prevErrors) => ({...prevErrors, name: "Username or email is Invalid",}));
          return false;
          } else {
            setErrors((prevErrors) => ({...prevErrors,name: "",}));
          return true;
          }
    };

    const validatePassword = () => {
        if (formData.password.trim() === "") {
            setErrors((prevErrors) => ({...prevErrors,password:"Password Invalid"}));
            return false;
        } else {
            setErrors((prevErrors) => ({...prevErrors,password:""}));
            return true;
        }
    };


    const handleSubmit = async (e) => {e.preventDefault();

        const isNameValid = validateName();
        const isPasswordValid = validatePassword();

        // Make an API request to register the user
        try {
            const response = await axios.post("http://127.0.0.1:8000/accounts/register/", formData);
            console.log("form submittion successful", response.data);
            if (isNameValid && isPasswordValid) {
                alert("form submittion")
            }
            // You can redirect or handle the response as needed.
        } 
        catch (error) {
            console.error("form submittion failed", error);
            if (isNameValid && isPasswordValid) {
                alert("form submittion failed")
            }
            // Handle the error here.
        }
    };


    return (
        <>
        <div className='LoginForm-main-div'>
            <div className='LoginForm-sub-div'>
                <div className='LoginForm-logo'>
                <i class='fas fa-times' title='Close' onClick={() => onClose()}></i>
                </div>

                <div className='LoginForm-container'>
                    <div className='LoginForm-heading'><h3>Login in to Account</h3></div>

                    <form onSubmit={handleSubmit} className='LoginForm-main-form'>
                        <div className='LoginForm-form-input'>
                            <input type="text" value={formData.username}  onChange={handleChange} name='username' autoComplete='off' required></input>
                            <label>Username or email</label>
                        <span className='LoginForm-form-error1'>{errors.name}</span>
                        </div>

                        {/* <br/> */}

                        <div className='LoginForm-form-input'>
                            <input type={ passwordview? 'text' : 'password' } value={formData.password} onChange={handleChange} name='password' autoComplete='off' required></input>
                            <label>Password</label>
                            <p className='LoginForm-passwordIcon' onClick={() => setpasswordview(!passwordview)}>{passwordview ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                        <span  className='LoginForm-form-error2'>{errors.password}</span>
                        </div>
                        
                        
                        <div className='LoginForm-form-checkbox-container'>
                            <div className='LoginForm-form-checkbox-container-one'><input type='checkbox' title='Remind me'/>Remind me</div>
                            <div className='LoginForm-form-checkbox-container-two' title='Forgot Password'><Link to='' >Forgot Password?</Link></div>
                        </div>

                        

                        <div className='LoginForm-form-subbmitButton'>
                            <button type='submit' title='Login'>Login</button>
                        </div>
                    </form>
                    
                    <div className='LoginForm-line'><hr></hr></div>

                   

                    <div className='LoginForm-singup'><p>Don't have an account ?<Link to='' className='LoginForm-singup-link'title='sign up' onClick={() => setShowSignup(true)}>Sign up</Link></p></div>
                </div>
            </div>
        </div>
        {showSignup && <SignupForm onClose={() => setShowSignup(false)}/>}
        </>
    );
};

export default LoginForm;