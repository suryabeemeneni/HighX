import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from "react-router-dom";
import LoginForm from '../LoginForm/LoginForm';

const SignupForm = ({onClose}) => {
    const [passwordview, setpasswordview] = useState(false);
    const [confirmPasswordView, setconfirmPasswordView] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber:'',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [showLogin, setShowLogin] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // clear the specific error when the user starts typing
    };


    // State to manage the checkbox value
    const [isChecked, setChecked] = useState(false);


    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setChecked(!isChecked); // Toggle the checkbox value
    };


    
    const[errors,setErrors]=useState({});


    const validateForm = () => {
        let valid = true;
        const newErrors = {};
    
        // firstName validation
        if (!formData.firstName.trim()) {
        newErrors.firstName = 'First Name is Required';
        valid = false;
        }
    
    
        // lastName validation
        if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last Name is Required';
        valid = false;
        }

        // Phone Number
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone Number is not valid';
            valid = false;
        };
    
    
        // email validation
        if (!formData.email.trim()) {
        newErrors.email = 'Email is Required';
        valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is not valid';
        valid = false;
        }
    
    
        // password validation
        if (!formData.password.trim()) {
        newErrors.password = 'Password is Required';
        valid = false;
        } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
        valid = false;
        }
    
    
        // Confirm Password validation
        if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = ' Confirm Password is Required';
        valid = false;
        } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
        valid = false;
        }


        // Checkbox validation
    if (!isChecked) {
        newErrors.checkbox = 'You must accept the terms and conditions';
        valid = false;
    }
        setErrors(newErrors);
        return valid;
    };



    const signUp = async () => {
        try {
          // Here you would typically make an API request to your server
          // to create a new user account using the formData.
          // For simplicity, I'm just logging the data to the console.
        console.log('Signing up with:', formData);
    
    
          // Reset the form after successful submission
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber:'',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({});
        } catch (error) {
        console.error('Error signing up:', error.message);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        if (validateForm()) {
        signUp();
        alert("Form Subbmitted")
        }
    };


    return (
        <>
            <div className="signupForm-main-div">
                <div className="signupForm-sub-div">
                <div className='signupForm-logo'>
                {/* <h2 className='LoginForm-logo-image'>Login</h2> */}
                <i class='fas fa-times' title='Close' onClick={() => onClose()}></i>
                </div>

                <div className='signupForm-container'>
                    <div className='signupForm-heading'><h3>Create An Account</h3></div>

                    <form onSubmit={handleSubmit} className='signupForm-main-form'>
                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required              id='firstName' name='firstName' value={formData.firstName} onChange={handleChange}></input>
                            <label>Fisrt Name</label>
                            {errors.firstName && <span className='signupForm-form-error1'>{errors.firstName}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required              id='lastName' name='lastName' value={formData.lastName} onChange={handleChange}></input>
                            <label>Last Name</label>
                            {errors.lastName && <span className='signupForm-form-error2'>{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type="number" autoComplete='off' required            id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className='signupForm-input-type-number'></input>
                            <label>Phone Number</label>
                            {errors.phoneNumber && <span className='signupForm-form-error3'>{errors.phoneNumber}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required                id='email' name='email' value={formData.email} onChange={handleChange}></input>
                            <label>Email</label>
                            {errors.email && <span className='signupForm-form-error4'>{errors.email}</span>}
                            </div>
                        </div>

                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type={ passwordview? 'text' : 'password' } autoComplete='off' required               id='password' name='password' value={formData.password} onChange={handleChange}></input>
                            <label>Password</label>
                            <p className='signupForm-passwordIcon' onClick={() => setpasswordview(!passwordview)}>{passwordview ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                            {errors.password && <span className='signupForm-form-error5'>{errors.password}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type={ passwordview? 'text' : 'password' } autoComplete='off' required               id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}></input>
                            <label>Confirm Password</label>
                            <p className='signupForm-passwordIcon' onClick={() => setconfirmPasswordView(!confirmPasswordView)}>{confirmPasswordView ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                            {errors.confirmPassword && <span className='signupForm-form-error6'>{errors.confirmPassword}</span>}
                            </div>
                        </div>

                        <div className='signupForm-form-checkbox-container'>
                            <div className='signupForm-form-checkbox-container-one'><input type='checkbox' title='Accept Terms and conditions'         checked={isChecked} onChange={handleCheckboxChange}/>Creating your account and you accepting<Link to=''className=' signupForm-form-checkbox-container-two'>Terms & Conditions</Link></div>
                        </div>{errors.checkbox&&<span className='signupForm-form-error7'>{errors.checkbox}</span>}

                        <div className='signupForm-form-subbmitButton'>
                            <button type='submit' title='Login'>Sign Up</button>
                        </div>
                    </form>
                    <div className='signupForm-line'><hr></hr></div>

                    <div className='signupForm-singup'><p>Already have an account ? <Link to='' className='signupForm-singup-link' title='Sign In' onClick={() =>  {setShowLogin(true) }}>Sign In</Link></p></div>
                </div>
                </div>
            </div>
            {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default SignupForm;