import React from 'react';
import '../hooks/Homehooks.css';

const Homehooks = () => {
    return (
        <>
            <div className='hooks-main-div'>
                <div className='hooks-sub-div'>
                <div className='hooks-container'>
                    <a href='/useState' className='hooks-link' ><h1>useState</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='/useEffect' className='hooks-link' ><h1>useEffect</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1>useRef</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1>useContext</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1>useMemo</h1></a>
                </div>
                <div className='hooks-container'>
                <a href='' className='hooks-link'><h1>Custom hooks</h1></a>
                </div>
            </div>
            </div>
        </>
    );
};

export default Homehooks;