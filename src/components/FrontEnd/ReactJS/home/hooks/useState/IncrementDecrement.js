import React, { useState } from 'react';
import './Increment.css';


const IncrementDecrement = () => {

    const [X, setX] = useState(0);

    const incrementChange = () => {
        setX(X+1);
    }
    const decrementChange = () => {
        setX(X-1);
    }
    return (
        <div className='somebasicuseState'>
            <div>
                <h2>count : {X}</h2>
            </div>
            <div>
                <button onClick={incrementChange}>Increment</button>
                <button onClick={decrementChange}>Decrement</button>
            </div>
        </div>
    );
};

export default IncrementDecrement;