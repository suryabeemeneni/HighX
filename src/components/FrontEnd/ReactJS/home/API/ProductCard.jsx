import React from 'react';

const ProductCard = ({backdrop_path, id,title, overview, poster_path,vote_average, handleMovieClick}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
        <>

            <div style={{display:'flex',flexDirection:'column'}} onClick={() => handleMovieClick(id)}>
           <h1 style={{ width:'200px',height:'50px'}}>{title}</h1>
           <img src={imageUrl} style={{ width:'200px',height:'300px'}} alt=''/>
           </div>

        </>
    );
};

export default ProductCard;