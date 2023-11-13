import React from 'react';
import './Hookformshome.css';
import reactsyntaximage from '../../../../images/FormvalidationImages/hookformsyntax.jpg'
import hooksformimage from '../../../../images/FormvalidationImages/hooksform.gif'


const Hookformshome = () => {
    return (
        <>
            <div className='hooksformhome-main-div'>
                <div className='hooksformhome-sub-div'>
                <div className='hooksformhome-image-div'>
                        <a href='/Hooksform' className='hooksformhome-image-link'><img src={reactsyntaximage}  alt='reactsyntaximage' className='props-image'/></a>
                    </div>
                    <div className='hooksformhome-containers-main-div'>
                        <div className='hooksformhome-container'>
                            <a href='/Hooksform' className='hooksformhome-container-link' style={{fontWeight:"550"}}>
                                <p className='hooksformhome-container-para'><b>Some popular Form libraries includes :</b><br/><br/>
                                   <p>Formik</p>
                                   <p>Redux Form</p>
                                   <p>React Hook Form *</p>
                                   <p>Yup..</p></p>
                                   
                                   <img src={hooksformimage} alt='hooksformimage' className='hooksformhome-container-para-image'/></a>
                        </div>
                        <div className='hooksformhome-container'>
                            <a href='/Hooksform' className='hooksformhome-container-link'><p className='hooksformhome-container-para'>To create Form using react Hook form we need to install form hooks inside the project</p></a>
                            <br/>
                            <p className='hooksformhome-container-para' style={{color:"azure"}}>@ npm install react-hook-form --save</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hookformshome;