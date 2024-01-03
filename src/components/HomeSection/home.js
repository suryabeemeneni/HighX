import React from 'react';
import './home.css'
import { HomeCards } from '../../Dummydata/Data-Home';
import { Link } from 'react-router-dom';
import HomeSub from './HomeSub';


const home = () => {
    return (
        <>
        <div className='home-main-div'>
            {HomeCards.map((data) => (
            <Link to={data.link} className='home-Main-cards'>
                <div className='home-card-img'>
                    <img src={data.imgsrc} alt='' />
                </div>
                <article className='home-card-heading'>
                    <h3>{data.h3}</h3>
                </article>
                <div className='home-card-para'>
                    <span>{data.p1}</span>
                    <em>{data.em}</em>
                    <span>{data.p2}</span>
                </div>
                <div className='home-card-para'>
                <span>Collections <i class="fas fa-arrow-right"></i></span>
                </div>
            </Link>
            ))}
        </div>
        <HomeSub />
        </>
    );
};

export default home;