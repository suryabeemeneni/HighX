import React from 'react';
import './Homecontrolled.css'
import Controlledform from './Controlledform';
import Controlledformvalid from './Controlledformvalid';
import Validationformcontrol from './Validationformcontrol';

const Homecontrolled = () => {
    return (
        <>
            <div className='homecontrolled-main-div'>
                <div className='homecontrolled-sub-div'>
                    <div className='form'><Controlledform />
                    <a href='/Controlledform'>View large...</a>
                    </div>

                    <div className='form'><Controlledformvalid />
                    <a href='/Controlledformvalid'>View large...</a>
                    </div>

                    <div className='form'><Validationformcontrol />
                    <a href='/Validationformcontrol'>View large...</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homecontrolled;