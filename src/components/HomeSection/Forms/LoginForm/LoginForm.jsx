import React, { useState } from 'react';
import './LoginForm.css'
import axios from 'axios';

const LoginForm = ({handleSubmit}) => {
    
    const [passwordview, setpasswordview] = useState(false);
    const [formData, setFormData] = useState({username:"",password:""})

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


    const handleButtonSubmit = async (e) => {e.preventDefault();

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

                <div className='LoginForm-container'>
                    <div className='LoginForm-heading'><h3>Login in to Account</h3></div>

                    <form className='LoginForm-main-form' onSubmit={handleSubmit}>
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
                            <div className='LoginForm-form-checkbox-container-two' title='Forgot Password'>
                                <a href='' >Forgot Password?</a>
                                </div>
                        </div>

                        

                        <div className='LoginForm-form-subbmitButton'>
                            <button type='submit' title='Login' onClick={handleButtonSubmit}>Login</button>
                        </div>
                    </form>
                    
                    <div className='LoginForm-line'><hr></hr></div>

                   

                    <div className='LoginForm-singup'><p>Don't have an account ?
                        <a href='' className='LoginForm-singup-link'title='sign up'>Sign up</a>
                        </p></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginForm;