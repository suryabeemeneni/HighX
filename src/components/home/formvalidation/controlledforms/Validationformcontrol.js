import React, { useState } from 'react';


const Validationformcontrol = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });


  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

// Form submission handler
const handleSubmit = (e) => {e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

if (isNameValid && isEmailValid) {
  // If both name and email are valid, perform form submission or other actions
  alert("Form submitted successfully");
 }
};


// Validation function for the "name" field
const validateName = () => {
  if (formData.name.trim() === "") {
    setErrors((prevErrors) => ({...prevErrors, name: "Name is required.",}));
  return false;
  } else {
    setErrors((prevErrors) => ({...prevErrors,name: "",}));
  return true;
  }
};


// Validation function for the "email" field
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

// // Input change handler
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   // Update the form data when an input field value changes
//   setFormData((prevData) => ({...prevData,[name]: value,}));
// };



  return (
  <>
    <div className='controlledform-main-div'>
    <div className='controlledform-sub-div'>
    <h2 style={{color:"#3498DB",margin:"0"}}>Login to HighX</h2>
            <p style={{margin:"0"}}>Form validation check</p><br/>

    <form onSubmit={handleSubmit}>
      <div className='controlledform-input'>
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name"
        value={formData.name}
        // onChange={handleChange}/><br/>
        onChange={(e) => setFormData(e.target.value)}/><br/>
        <span className="error" style={{color:"red"}}>{errors.name}</span>
      </div>

      <br/>

      <div  className='controlledform-input'>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email"
        value={formData.email}
        // onChange={handleChange}/><br/>
        onChange={(e) => setFormData(e.target.value)}/><br/>
        <span className="error" style={{color:"red"}}>{errors.email}</span>
      </div>
      
      <br></br>
      <br></br>

      <button type="submit" className='button-forms'>Submit</button>

    </form>
    </div>
    </div>
  </>
  );
};

export default Validationformcontrol;