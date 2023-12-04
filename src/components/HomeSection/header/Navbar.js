import React, { useState } from 'react';
import './Navbar.css'
import logo from './image/download.jpg';

const Navbar = () => {
    
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
                            <a href='/aboutus' title='About us' className='navL'>About us</a>
                            <a href='' title='Services' className='navL'>Services</a>
                            <a href='' title='Careers' className='navL'>Careers</a>
                            <a href='' title='Contact us' className='navL'>contact us</a>
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
                            <a class="nav-butt1" href="" title="Client Register">Client Register</a>
                            <a class="nav-butt2" href="" title="Client Login">Client Login</a>
                            </div>
                            </div>
                        </div>                    
                </div>
            </nav>
        </body>
    );

};

export default Navbar;