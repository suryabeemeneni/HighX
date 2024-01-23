import React from 'react';
import HAbout from './Home-cont/HAbout';
import portal from './employee-portal-software.jpg'

const home = () => {
    return (
        <>
           <div style={{height:'2rem'}}></div>

           {/* <HAbout/> */}

           <img src={portal} width='100%'/>
        </>
    );
};

export default home;