import React from 'react';
import profile from './profileSample.jpeg'

const UserProfile = () => {
    return (
        <>
            <div style={{marginTop:'60px'}}></div>
            <img src={profile} width='100%'/>
        </>
    );
};

export default UserProfile;