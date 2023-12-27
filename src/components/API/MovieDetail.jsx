import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {getProducts()}, [id]);

    async function getProducts() {

        const res = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=3035a2e62fc23afedb7da1c6546b79a9`)
        const productList = await res.json()
        setMovieDetails(productList)
    }

    if (!movieDetails) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1  style={{ width:'200px',height:'50px'}}>{movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}  style={{ width:'200px',height:'300px'}}></img>
        </div>
    );
};

export default MovieDetail;
