import React from 'react';
import './Useeffect.css'

const Useeffect = () => {
    return (
        <>
            <div className='useeffect-main-div'>
                <a href='/ueeffect'>useEffect without Dependencies</a>
                <a href='/Useeffectblankdep'>useEffect with zero dependencies</a>
                <a href='/Useeffectwdp'>useEffect with dependencies</a>
                <a href='/useEffectCleanUp'>useEffect Clean Up</a>
            </div>
        </>
    );
};

export default Useeffect;