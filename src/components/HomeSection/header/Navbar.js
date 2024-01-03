import React, { useState } from 'react';
import './Navbar.css'
import logo from './image/download.jpg';
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

const Navbar = () => {
    const [openSignup, setOpenSignup] = useState(false);
    const [openLogin, setOpenLogin] = useState(false)
    
    const handleButtonclick = () => {
        setOpenLogin(false)
        setOpenSignup(false)
    }
    
    return (
        <body>
            <nav className={'navbar'}>
                <div className='navbar-content'>
                    <div className='navbar-top'>
                        <a href='/' className='navbarImage'>
                            <img src={logo} alt='surya' className='navI'></img>
                        </a>
                        <button className="nav-function"><i className='fa fa-bars'/></button>
                        <div className='navbarLinks' id='myLinks'>
                            <a href='/' title='Home' className='navL'>Home</a>
                            <a href='/htmlHome' title='HTML' className='navL'>HTML</a>
                            <a href='/CSSHome' title='CSS' className='navL'>CSS</a>
                            <a href='/JavaScript' title='Java Script' className='navL'>Java Script</a>
                            <a href='/ReactHome' title='React JS' className='navL'>React JS</a>
                            <a href='/GitHubHome' title='Java Script' className='navL'>Git Hub</a>
                            {/* <a href='/ReactHome' title='React JS' className='navL'>a w s</a> */}
                            </div>
                            </div>
                        <div className='navbar-bottom'>
                        <div className='navbarItems'>
                            <div className='navFirstItem'>
                            <a class="nav-toll" href="tel:1-800-800-741" title="Toll Free">Toll Free: 1-800-800-741</a>
                            <span class="nav-toll">|</span>
                            <a class="nav-toll" href="tel:879-030-4431" title="Call Us">Call Us: 879-030-4431</a>
                            </div>
                            <div className='navSecondItem'>
                            <p class="nav-butt1" title="Client Register"  onClick={() => setOpenSignup(!openSignup)}>Client Register</p>
                            <p class="nav-butt2" title="Client Login" onClick={() => setOpenLogin(!openLogin)} >Client Login</p>
                            </div>
                            </div>
                        </div>                    
                </div>
            </nav>
            {openSignup && <SignupForm onClose={handleButtonclick}/>}
            {openLogin && <LoginForm onClose={handleButtonclick}/>}
        </body>
    );

};

export default Navbar;