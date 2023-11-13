import React from 'react';
import './Displayforms.css';
import formslogo from '../../../../images/FormvalidationImages/formslogo.png'
import Sampleform from './Sampleform'


const Displayforms = () => {
    return (
        <>
            <div className='displayforms-main-div'>
                <div className='displayforms-sub-div'>
                    <div className='basicform-container'>
                        <div className='sampleform-image-div'>
                            <a href='/Sampleform' style={{width:"100%",height:"50%"}} >
                                <img src={formslogo} alt='formslogo'style={{width:"100%",height:"100%"}} /></a>
                                <br></br>
                                <div className='sampleform-content'>
                                    <p>Forms are n integral part of any modren web application. It allows the users to interact with the application as well as gather information from the users. </p>
                                    <br/>
                                    <p>Forms can perform manyu tasks that depend on the nature of your business requirements and logic such as authentication of the user, adding user, searching, filtering, booking, ordering, etc.</p>
                                    <br/>
                                    <p>A form can contain text fields, buttons, checkbox, radio button, etc.</p>
                                </div>
                        </div>
                        <div className='sampleform-div'>
                            <marquee><h1 style={{fontFamily:"cursive"}}>Basic form creation</h1></marquee>
                            <Sampleform />
                            <a href='/Sampleform'>view large... </a>
                            </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Displayforms;