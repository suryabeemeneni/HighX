import React, { useEffect, useRef, useState } from 'react';
import './SignupForm.css'
import AppHome from '../../../../AppHome';

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



    const firstName = useRef()
    const lastName = useRef()
    const email= useRef()
    const phoneNumber= useRef()
    const Password = useRef()
    const confirmPassword = useRef()

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
            localStorage.setItem('LastName',lastName.current.value )
            localStorage.setItem('email',email.current.value )
            localStorage.setItem('phhoneNumber',phoneNumber.current.value )
            localStorage.setItem('password',Password.current.value )
            localStorage.setItem('confirmPassword',confirmPassword.current.value )
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
            <div className="signupForm-main-div">
                <div className="signupForm-sub-div">
                <div className='signupForm-logo'>
                {/* <h2 className='LoginForm-logo-image'>Login</h2> */}
                <i class='fas fa-times' title='Close' onClick={() => onClose()}></i>
                </div>

                <div className='signupForm-container'>
                    <div className='signupForm-heading'><h3>Create An Account</h3></div>

                    <form className='signupForm-main-form'>
                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required              id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} ref={firstName}></input>
                            <label>Fisrt Name</label>
                            {errors.firstName && <span className='signupForm-form-error1'>{errors.firstName}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required              id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} ref={lastName}></input>
                            <label>Last Name</label>
                            {errors.lastName && <span className='signupForm-form-error2'>{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type="number" autoComplete='off' required            id='phoneNumber' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} ref={phoneNumber}></input>
                            <label>Phone Number</label>
                            {errors.phoneNumber && <span className='signupForm-form-error3'>{errors.phoneNumber}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type="text" autoComplete='off' required                id='email' name='email' value={formData.email} onChange={handleChange} ref={email}></input>
                            <label>Email</label>
                            {errors.email && <span className='signupForm-form-error4'>{errors.email}</span>}
                            </div>
                        </div>
 
                        <div className='signupForm-form-input'>
                            <div className="signupForm-form-input-fields">
                            <input type={ passwordview? 'text' : 'password' } autoComplete='off' required               id='password' name='password' value={formData.password} onChange={handleChange} ref={Password}></input>
                            <label>Password</label>
                            <p className='signupForm-passwordIcon' onClick={() => setpasswordview(!passwordview)}>{passwordview ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                            {errors.password && <span className='signupForm-form-error5'>{errors.password}</span>}
                            </div>

                            <div className="signupForm-form-input-fields">
                            <input type={ passwordview? 'text' : 'password' } autoComplete='off' required               id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} ref={confirmPassword}></input>
                            <label>Confirm Password</label>
                            <p className='signupForm-passwordIcon' onClick={() => setconfirmPasswordView(!confirmPasswordView)}>{confirmPasswordView ? <i class='far fa-eye passwordIcon-one'></i> : <i class='far fa-eye-slash passwordIcon-one'></i>}</p>
                            {errors.confirmPassword && <span className='signupForm-form-error6'>{errors.confirmPassword}</span>}
                            </div>
                        </div>

                        <div className='signupForm-form-checkbox-container'>
                            <div className='signupForm-form-checkbox-container-one'><input type='checkbox' title='Accept Terms and conditions'         checked={isChecked} onChange={handleCheckboxChange}/>
                            {/* Creating your account and you accepting */}
                            <a href=''className=' signupForm-form-checkbox-container-two'>Terms & Conditions</a>
                            </div>
                        </div>{errors.checkbox&&<span className='signupForm-form-error7'>{errors.checkbox}</span>}

                        <div className='signupForm-form-subbmitButton'>
                            <button type='submit' title='Login' onClick={handleSubmit}>Sign Up</button>
                        </div>
                    </form>
                    <div className='signupForm-line'><hr></hr></div>

                    <div className='signupForm-singup'><p>Already have an account ? 
                        <a href='' className='signupForm-singup-link' title='Sign In' >Sign In</a>
                        </p></div>
                </div>
                </div>
            </div>
            }
        </>
    );
};

export default SignupForm;