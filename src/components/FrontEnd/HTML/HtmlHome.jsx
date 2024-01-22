import React from 'react';
import HtmlHomeContent from '../HTML/HtmlHome/HtmlHomeContent';
import HtmlHomeDetails from '../HTML/HtmlHome/HtmlHomeDetails';
import HtmlHomeTags from '../HTML/HtmlHome/HtmlHomeTags';
import FrontEndTop from '../FrontEndTop';

const HtmlHome = () => {
    return (
        <>
        <FrontEndTop/>
        
        <HtmlHomeContent />

        <HtmlHomeDetails />

        <HtmlHomeTags />

        </>
    );
};

export default HtmlHome;