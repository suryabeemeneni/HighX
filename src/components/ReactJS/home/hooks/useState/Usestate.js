import React from 'react';
import './Usestate.css'
import IncrementDecrement from './IncrementDecrement';
import Increment from './Increment';
import ClickFunction from './Click functions/ClickFunction'
import ClickFunction2 from './Click functions/ClickFunction2'
import ClickFunction4 from './Click functions/ClickFunction4'

const Usestate = () => {
    return (
        <>
                <ClickFunction />
                <ClickFunction2 />
                <ClickFunction4 />
            <div className='usestate-main-div'>
                <Increment />
                <IncrementDecrement />
            </div>
        </>
    );
};

export default Usestate;