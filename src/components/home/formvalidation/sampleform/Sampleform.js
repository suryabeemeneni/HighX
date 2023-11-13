import React, { useState } from 'react';
import './Sampleform.css'

const Sampleform = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handlesubmit = () => {alert(username +""+ password)}
    return (
        <>
        <div className='sampleform-main-div'>
            <div className='sampleform-sub-div'>
            <h2>Login form</h2>

            {/* Using onSubmit to perform some action after submiting the login */}
            <form onSubmit={handlesubmit}>
                <div className='sampleform-input-fields'>
                <div className='sampleform-input'>
                <label>Enter username : </label>
                <input type='text' value={username} onChange={(e) => setusername(e.target.value)} />
                </div>

                <div className='sampleform-input'>
                <label>Enter password : </label>
                <input type='password' value={password} onClick={(e) => setpassword(e.target.value)}/>
                </div>

                <div className='sampleform-subbmit'><input type='submit' value="login"/></div>
                </div>
            </form>
            </div>
            </div>
        </>
    );
};

export default Sampleform;