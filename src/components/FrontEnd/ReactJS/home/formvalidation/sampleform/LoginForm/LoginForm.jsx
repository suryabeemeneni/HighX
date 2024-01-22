import React, { useState } from 'react';
import './LoginForm.css'
import { Link } from "react-router-dom";
import logo from '../LoginForm/logo1.png'

const LoginForm = ({onClose}) => {
    
    const [passwordview, setpasswordview] = useState(false);
    const [formData, setFormData] = useState({username:"",password:""})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((preData) => ({...preData,[name]:value}))
    }

    const [errors, setErrors] = useState({username:"",password:""});

    const validateName = () => {
        if (formData.username.trim() === "") {
            setErrors((prevErrors) => ({...prevErrors, name: "Name is required.",}));
          return false;
          } else {
            setErrors((prevErrors) => ({...prevErrors,name: "",}));
          return true;
          }
    };

    const validatePassword = () => {
        if (formData.password.length <=7) {
            setErrors((prevErrors) => ({...prevErrors,password:"Password must contain 8 characters"}));
            return false;
        } else {
            setErrors((prevErrors) => ({...prevErrors,password:""}));
            return true;
        }
    };


    const handleSubmit = (e) => {e.preventDefault();

        const isNameValid = validateName();
        const isPasswordValid = validatePassword();

        if (isNameValid && isPasswordValid) {
            alert("form submitted")
        }
    };


    return (
        <>
        <div className='LoginForm-main-div'>
            <div className='LoginForm-sub-div'>
                <div className='LoginForm-logo'>
                <img src={logo} alt="" className='LoginForm-logo-image'></img>
                <i class='fas fa-times' title='Close' onClick={() => onClose()}></i>
                </div>

                <div className='LoginForm-container'>
                    <div className='LoginForm-heading'><h3>Sign in to Account</h3></div>

                    <form onSubmit={handleSubmit}>
                        <div className='LoginForm-form-input'>
                            <input type="text" value={formData.username}  onChange={handleChange} name='username' autoComplete='off' required></input>
                            <label>Username or email</label>
                        </div><span className='LoginForm-form-error'>{errors.name}</span>

                        <br/><br/>

                        <div className='LoginForm-form-input'>
                            <input type={ passwordview? 'text' : 'password' } value={formData.password} onChange={handleChange} name='password' autoComplete='off' required></input>
                            <label>Password</label>
                            <p className='LoginForm-passwordIcon' onClick={() => setpasswordview(!passwordview)}>{passwordview ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                        </div><span  className='LoginForm-form-error'>{errors.password}</span>

                        <br/>
                        
                        <div className='LoginForm-form-checkbox-container'>
                            <div className='LoginForm-form-checkbox-container-one'><input type='checkbox' title='Remind me'/>Remind me</div>
                            <div className='LoginForm-form-checkbox-container-two' title='Forgot Password'><Link to='' >Forgot Password?</Link></div>
                        </div>

                        <br/>

                        <div className='LoginForm-form-subbmitButton'>
                            <button type='submit' title='Login'>Login</button>
                        </div>
                    </form>
                    
                    <div className='LoginForm-line'><hr></hr></div>

                    <div className='LoginForm-singup'><p>Don't have an account ?</p><Link to='' className='LoginForm-singup-link'title='sign up'>Sign up</Link></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginForm;