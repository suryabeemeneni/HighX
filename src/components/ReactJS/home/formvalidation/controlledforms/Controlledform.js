import React, { useState } from 'react';
import './Controlledform.css'

const Controlledform = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
        <div className='controlledform-main-div'>
            <div className='controlledform-sub-div'>
            <h2 style={{color:"#3498DB",margin:"0"}}>Login to HighX</h2>
            <p style={{margin:"0"}}>useStae login form</p><br/>
            <form>
                <div className='controlledform-input'>
                <label>Email</label><br/>
                <input type='email' placeholder='email'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <br></br>

                <div className='controlledform-input'>
                <label>Password</label><br/>
                <input type='password' placeholder='*******'
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <br></br>
                <br></br>

                
                <div>
                <button className='button-forms'
                onClick={(e) => {e.preventDefault();
                    alert("Email : ",email);
                    alert("Password : ", password);
                }}
                >Login</button>
                </div>
            </form>
            </div>
            </div>
        </>
    );
};

export default Controlledform;