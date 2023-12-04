import React from 'react';
import './Homevalidation.css';
import validationImage from '../../images/FormvalidationImages/maxresdefault.jpg';
import validateImage from '../../images/FormvalidationImages/validatesamplecodeImage.webp';
import validatingImage from '../../images/FormvalidationImages/validateImage.gif';

const Homevalidation = () => {
    return (
        <>
            <div className='valid-main-div'>
            <div className='valid-sub-div'>
                <a href='/Formvalidhome' className='valid-image1'><img src={validateImage} alt='validatelogo1'/></a>
                <a href='/Formvalidhome' className='valid-image'><img src={validationImage} alt='validatelogo2'/></a>
                <a href='/Formvalidhome' className='valid-image1'><img src={validatingImage} alt='validatelogo3'/></a>
            </div>
            </div>
        </>
    );
};

export default Homevalidation;