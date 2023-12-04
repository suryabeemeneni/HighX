import React from 'react';
import './Usestate.css'
import IncrementDecrement from './IncrementDecrement';
import Increment from './Increment';

const Usestate = () => {
    return (
        <>
            <div className='usestate-main-div'>
                <Increment />
                <IncrementDecrement />
            </div>
        </>
    );
};

export default Usestate;