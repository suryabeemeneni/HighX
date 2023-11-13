import React, { useState } from 'react';
import './Validationform.css'

const Validationform = () => {
    const [userName, setUserName] = useState('')
    const [inputError, setInputError] = useState (null)

    const handleChange = (e) => {
        const value = e.target.value;
        setUserName(value)

        if (value.length <= 5) {
            setInputError("Username must be atleast 5 digits")
        } else {
            setInputError(null)
        }
    }

    const handleSubmit = () => {
        alert(userName)
    }
    return (
        <>
<div className='validationform-main-div'>
<div className='validationform-sub-div'>
<h2>Validation form</h2>

{/* Using onSubmit to perform some action after submiting the login */}
<form onSubmit={handleSubmit}>
    <div className='validationform-input-fields'>
    <div className='validationform-input'>
    <label>Username : </label>
    <input type='text' value={userName} onChange={handleChange}/>
    {inputError && <div style={{color:"red"}}>{inputError}</div>}
    </div>

    <div className='validationform-subbmit'><input type='submit' value="validate"/></div>
    </div>
</form>
</div>
</div>
</>
    );
};

export default Validationform;