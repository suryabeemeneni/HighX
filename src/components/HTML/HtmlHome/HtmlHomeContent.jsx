import React from 'react';
import './HtmlHome.css'
import APIHome from '../../API/APIHome';

const HtmlHomeContent = () => {
    return (
        <>
        <APIHome />
            <div className="HtmlHome-main-div">
            <div className="HtmlHome-sub-div">
                <h1><strong>What is HTML</strong></h1>
                <br/>
                <p>HTML stands for <b className='bs'>H</b>yper <b className='bs'>T</b>ext <b className='bs'>M</b>arkup <b className='bs'>L</b>anguage</p>
                <p>HTML is the <strong className='bs'>standard markup</strong> language for Web pages</p>
                <p>HTML <strong className='bs'>elements</strong> are the building blocks of HTML pages</p>
                <p>HTML elements are represented by <strong className='bs'> &lt; &gt; tags</strong></p>
            </div>
            </div>
        </>
    );
};

export default HtmlHomeContent;