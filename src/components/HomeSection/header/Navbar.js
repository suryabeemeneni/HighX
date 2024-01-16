// import React, { useState } from 'react';
// import './Navbar.css'
// import logo from './image/download.jpg';
// import LoginForm from "../Forms/LoginForm/LoginForm";
// import SignupForm from "../Forms/SignupForm/SignupForm";

// const Navbar = () => {
//     const [openSignup, setOpenSignup] = useState(false);
//     const [openLogin, setOpenLogin] = useState(false)

//     const handleButtonclick = () => {
//         setOpenLogin(false)
//         setOpenSignup(false)
//     }

//     return (
//         <body>
//             <nav className={'navbar'}>
//                 <div className='navbar-content'>
//                     <div className='navbar-top'>
//                         <a href='/' className='navbarImage'>
//                             <img src={logo} alt='surya' className='navI'></img>
//                         </a>
//                         <button className="nav-function"><i className='fa fa-bars'/></button>
//                         <div className='navbarLinks' id='myLinks'>
//                             <a href='/' title='Home'>Home</a>
//                             <a href='/htmlHome' title='HTML'>HTML</a>
//                             <a href='/CSSHome' title='CSS'>CSS</a>
//                             <a href='/JavaScript' title='Java Script'>Java Script</a>
//                             <a href='/ReactHome' title='React JS'>React JS</a>
//                             <a href='/GitHubHome' title='Java Script'>Git Hub</a>
//                             {/* <a href='/ReactHome' title='React JS'>a w s</a> */}
//                             </div>
//                             </div>
//                         <div className='navbar-bottom'>
//                         <div className='navbarItems'>
//                             <div className='navFirstItem'>
//                             <a class="nav-toll" href="tel:1-800-800-741" title="Toll Free">Toll Free: 1-800-800-741</a>
//                             <span class="nav-toll">|</span>
//                             <a class="nav-toll" href="tel:879-030-4431" title="Call Us">Call Us: 879-030-4431</a>
//                             </div>
//                             <div className='navSecondItem'>
//                             <p class="nav-butt1" title="Client Register"  onClick={() => setOpenSignup(!openSignup)}>Client Register</p>
//                             <p class="nav-butt2" title="Client Login" onClick={() => setOpenLogin(!openLogin)} >Client Login</p>
//                             </div>
//                             </div>
//                         </div>
//                 </div>
//             </nav>
//             {openSignup && <SignupForm onClose={handleButtonclick}/>}
//             {openLogin && <LoginForm onClose={handleButtonclick}/>}
//         </body>
//     );

// };

// export default Navbar;

import React, { useState } from "react";
import navImage from "./image/Hola.jpg";
import profileImage from "./image/download.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [eduDropdown, setEduDropdown] = useState(false);

  const makesetEduDropdown = () => {
    if (eduDropdown == false) {
      setEduDropdown(true);
      setProfileDropdown(false);
    } else {
      setEduDropdown(false);
    }
  };

  const [ProfileDropdown, setProfileDropdown] = useState(false);

  const makesetProfileDropdown = () => {
    if (ProfileDropdown == false) {
      setProfileDropdown(true);
      setEduDropdown(false);
    } else {
      setProfileDropdown(false);
    }
  };

//   logout from website

const logout = () => {
    localStorage.removeItem("signup")
    window.location.reload()
}

  return (
    <>
      <nav className="navbar-main-div">
        <div className="navbar-sub-div" style={{ float: "left" }}>
          <img
            src={navImage}
            alt=""
            width={"100px"}
            height={"35px"}
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div className="navbar-sub-div" style={{ float: "right" }}>
          <a href="/" title="Hola9 - employee" className="navbar-cont">
            Home
          </a>
          <a
            href="https://hola9.com/"
            title="Hola9"
            target="_blank"
            className="navbar-cont"
          >
            Explore Hola9
          </a>
          <div>
            <p
              href="/CSSHome"
              title="Education"
              className="navbar-cont Education-div"
              style={
                eduDropdown
                  ? { borderBottom: " 2px solid rgb(6, 54, 56)" }
                  : { border: "unset" }
              }
              onClick={makesetEduDropdown}
            >
              Education
            </p>
            {eduDropdown && (
              <div className="edu-dropdown">
                <a href="/" title="Home">
                  Front End
                </a>
                {/* <div  style={{display : 'none', flexDirection:'column'}}>
                <a href="/htmlHome" title="HTML">
                  HTML
                </a>
                <a href="/CSSHome" title="CSS">
                  CSS
                </a>
                <a href="/JavaScript" title="Java Script">
                  Java Script
                </a>
                <a href="/ReactHome" title="React JS">
                  React JS
                </a>
                </div> */}
                <a href="/" title="Back End">
                  Back End
                </a>
                <a href="/" title="Cloud Computing">
                  Cloud Computing
                </a>
                <a href="/GitHubHome" title="Git Hub">
                  Git Hub
                </a>
              </div>
            )}
          </div>
          <p
            href="/GitHubHome"
            title="Profile"
            className="navbar-cont navbar-cont-profile"
            style={
              ProfileDropdown
                ? { borderBottom: " 2px solid rgb(6, 54, 56)" }
                : { border: "unset" }
            }
            onClick={makesetProfileDropdown}
          >
            <img
              width={25}
              height={25}
              src={profileImage}
              style={{ borderRadius: "50%" }}
            />
            &nbsp;{localStorage.name}
          </p>
          {ProfileDropdown && (
            <div className="edu-dropdown prof-dropdown">
              <a href="/JavaScript" title="Java Script">
                Profile
              </a>
              <button href="/ReactHome" title="React JS" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
