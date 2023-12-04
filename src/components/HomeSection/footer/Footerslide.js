import React, { useState } from 'react';
import './Footerslide.css'
import ReactSlides from './Slides.jsx/ReactSlides';
import HtmlSlide from './Slides.jsx/HtmlSlide';

const Footerslide = () => {
    const [htmlOpen, setHtmlOpen] = useState(false)
    const [reactOpen, setReactOpen] = useState(false)
    return (
        <>
        <div className="footer-top">
        <div className='footer-top-text'>
        <a href='/' className='f-t f-t-m'>Home</a>
        <a className='f-t f-t-m' onClick={() => {
            setHtmlOpen(!htmlOpen);setReactOpen(false)
        }}>HTML</a>
        {htmlOpen && <HtmlSlide/>}
        <a className='f-t f-t-m'>CSS</a>
        <a className='f-t f-t-m' >JavaScript</a>
        <a className='f-t f-t-m' onClick={() => {
            setReactOpen(!reactOpen);setHtmlOpen(false)
        }}>ReactJs</a>
        {reactOpen && <ReactSlides/>}
        </div></div>
        </>
    );
};

export default Footerslide;