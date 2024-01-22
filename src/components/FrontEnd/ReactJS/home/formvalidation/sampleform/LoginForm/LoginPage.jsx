import React from 'react';
import './LoginPage.css'
import logo from '../LoginForm/logo1.png'
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (    
        <>
            <div className='LoginForm-main-div'>
            <div className='LoginForm-sub-div'>
                <div className='LoginForm-logo'>
                <img src={logo} alt="" className='LoginForm-logo-image'></img>
                <i class='fas fa-times' title='Close'></i>
                </div>

                <div className='LoginForm-container'>
                    <div className='LoginForm-heading'><h3>Sign in to Account</h3></div>
                </div>

                <form>
                        <div className='LoginForm-form-input'>
                            <input type="text"name='username' autoComplete='off'></input>
                            <label>Username or email</label>
                        </div>

                        <br/>

                        <div className='LoginForm-form-input'>
                            <input type="password" name='username' autoComplete='off'></input>
                            <label>Password</label>
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
        </>
    );
};
export default LoginPage;