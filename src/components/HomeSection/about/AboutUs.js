import React from 'react';
import './AboutUs.css';

const AboutUs = (props) => {
    return (
        <div className='somebasicprop'>
            <h4>Hi{props.name}welcome!</h4>
            <p>This content is used with props</p>
        </div>
    );
};

export default AboutUs;