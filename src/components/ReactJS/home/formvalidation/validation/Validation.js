import React from 'react';
import './Validation.css'
import formvalidationimage from '../../../images/FormvalidationImages/formvalidation.webp'
import Validationform from './Validationform';

const Validation = () => {
    return (
        <>
            <div className='validation-main-div'>
                <div className='validation-sub-div'>
                <div className='validate-image-container'>
                <Validationform />
                    </div>
                    <div className='validate-image-container'>
                        <a href='' ><img src={formvalidationimage}/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Validation;