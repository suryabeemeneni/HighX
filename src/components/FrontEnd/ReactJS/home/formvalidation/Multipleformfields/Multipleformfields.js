import React from 'react';
import './Multipleformfields.css'
import Multipleforms from '../Multipleformfields/Multipleforms';
import multifromfilesimage from '../../../images/FormvalidationImages/multipleformimage.png'


const Multiplefromfilds = () => {
    return (
        <>
            <div className='multipleformfields-main-div'>
                <div className='multipleformfields-sub-div' >
                    <a href='/Multipleforms'  className='multipleformfields-sub-div-link'>
                        <img src={multifromfilesimage}/>
                    </a>
                    <div className='multipleformfields-code'><Multipleforms/></div>
                </div>
            </div>
        </>
    );
};

export default Multiplefromfilds;