// useState 
// syntax -->   const [x, setx] = useState(defaultValueofx)

// useState(10) <-- default value

// useState returns array
//                       [presentStateValue, functionToChangeTheStateValue]


// example as destructuring
// a = [1,2]    this value will take both the value

// [x,y] = [1,2]        x=1     y=2     same as useState

// const [x, setx] = [presentStateValueofx, functionToChangeTheStateValueofx]

// need to import {useState} from "react" to use the useState






import React, { useState } from 'react';
import './Increment.css';

const ContactUs = () => {
    const [x, setx] = useState(0)

    const onClickListner = () => {setx(x+1)}
    return (
        <div className='somebasicuseState'>
            <div>
                <h3>count : {x}</h3>
            </div>
            <div>
                <button onClick={onClickListner}>Increment</button>
            </div>
        </div>
    );
};

export default ContactUs;


