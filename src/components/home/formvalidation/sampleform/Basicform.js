import React, { useState } from 'react';

const Basicform = () => {

    const [formData, setFormData] = useState({name:"",email:"",password:""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData,[name]: value,}));
    };



    const [errors, setErrors] = useState({name:"",email:"",password:""})

    const validateName = () => {
        if (formData.name.trim() === "") {
            setErrors((prevErrors) => ({...prevErrors, name: "Name is required.",}));
          return false;
          } else {
            setErrors((prevErrors) => ({...prevErrors,name: "",}));
          return true;
          }
    };

    const validateEmail = () => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
          setErrors((prevErrors) => ({...prevErrors,email: "Invalid email address.",}));
          return false;
        } else {
          setErrors((prevErrors) => ({...prevErrors,email: "",}));
          return true;
        }
    };

    const validatePassword = () => {
        if (formData.password.length <=7) {
            setErrors((prevErrors) => ({...prevErrors,password:"password must contain 8 characters"}))
            return false;
        } else {
            setErrors((prevErrors) => ({...prevErrors,password:""}))
            return true;
        }
    }

    const handleSubmit = (e) => {e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            alert("form submitted")
        }
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>name</label><br/>
                <input type='text' name='name' value={formData.name} onChange={handleChange}></input><br/>
                <span>{errors.name}</span><br/><br/>

                <label>email</label><br/>
                <input type='email' name='email' value={formData.email} onChange={handleChange}></input><br/>
                <span>{errors.email}</span><br/><br/>

                <label>password</label><br/>
                <input type='password' name='password' value={formData.password} onChange={handleChange}></input><br/>
                <span>{errors.password}</span><br/><br/>

                <button type='submit'>subbmit</button>
            </form>
        </>
    );
};

export default Basicform;