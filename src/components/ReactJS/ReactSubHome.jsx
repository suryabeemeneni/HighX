import React from 'react';
import './ReactHome.css'
import { Link } from 'react-router-dom';
import { ReactHomeCards, ReactHomeCardsOne } from '../../dummydata';

const ReactSubHome = () => {
    return (
        <>
        <div className='post-backgimg'>
         <header class="post-header">
            <h1 class="post-title">React Examples</h1>
        </header>
        <div className='post-para'>
        <p class="intro">Welcome to our collection of <strong>React code examples</strong>! In this meticulously curated compilation, we have assembled a diverse range of <em>code snippets</em> that showcase the power and flexibility of the React library.</p>
        <p>Whether you are a beginner learning React or an experienced developer seeking inspiration, this collection offers something for everyone. From basic component rendering and state management to advanced concepts like hooks and context, these examples will help you build dynamic and interactive web applications with ease. Explore the possibilities and elevate your React skills with these practical and insightful examples.</p>
        </div>
        </div>


        <div className='sitemap'>
        {ReactHomeCardsOne.map((data) => (
         <Link to={data.link} class="sitemap-card sitemap-card-one" title={data.title}>
            <div class="sitemap-thumb sitemap-thumb-one">
                <img loading="lazy" src={data.imgsrc} alt={`thumb : ${data.title}`} title={data.title}/>
            </div>
            <article>
            <h3>{data.title}</h3>
            <span>{data.para}</span>
            </article>
        </Link>
        ))}
        {ReactHomeCards.map((data) => (
         <Link to={data.link} class="sitemap-card" title={data.title}>
            <div class="sitemap-thumb">
                <img loading="lazy" src={data.imgsrc} alt={`thumb: ${data.title}`} title={data.title}/>
            </div>
            <article>
                <h3>{data.title}</h3>
                <span>{data.para}</span>
            </article>
        </Link>
        ))}
        </div>
        </>
    );
};

export default ReactSubHome;