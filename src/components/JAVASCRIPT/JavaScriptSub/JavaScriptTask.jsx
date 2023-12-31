import React from 'react';
import { Link } from 'react-router-dom';
import { JSTopics } from '../../../dummydata';

const JavaScriptTask = () => {
    return (
        <>
        <div className="jsTask-heading">
            <h1><span>Java script - </span>Topics</h1>
        </div>


        <div  className="jsTask">
        {JSTopics.map((data) => (
            <Link to={data.link} className='jsTask-card'>
                    <img src={data.imgsrc} alt=''/>
                    <h3>{data.h3}</h3>
                    <div>
                    {data.para.map((val) => (
                    <p>{val.p}</p>
                    ))}
                    </div>
                    <span> 👁 View More</span>
            </Link>
        ))}
        </div>
        </>
    );
};

export default JavaScriptTask;