// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';

// const APIHome = () => {
//     const [products, updateProducts] = useState([])

//     useEffect ( () => {
//         getProducts()
//     },[])

//     async function getProducts() {
//         const res = await fetch('https://fakestoreapi.com/products')
//         const productList = await res.json()
//         updateProducts(productList)
//         console.log(productList);

//     }

//     if (products.length === 0) {
//         return (<h2>Fetching data ...</h2>)
//     }
//     return (
//         <>
//             {/* <h1>Products</h1> */}
//            {/* { products.map((p) => <ProductCard name={p.title} price={p.price}/>)} */}
//            { products.map((p) => <ProductCard {...p} key={p.id}/>)}

//         </>
//     );
// };

// export default APIHome;


import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Navigate, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const APIHome = () => {
    const [products, updateProducts] = useState([])
    const navigate = useNavigate();

    useEffect ( () => {
        getProducts()
        // return getProducts()
        // console.log(getProducts());
    },[])

const handleMovieClick = (id) => {
    console.log("Navigating to movie ID:", id);
    navigate(`/movie/${id}`);
};

    async function getProducts() {
        // const res = await fetch('https://fakestoreapi.com/products')
        const res = await fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=3035a2e62fc23afedb7da1c6546b79a9")
        const productList = await res.json()
        updateProducts(productList.results)
        console.log(productList.results);
        // return productList;

    }

    if (products.length === 0) {
        return (<h2>Fetching data ...</h2>)
    }

    const settings = {
        slidesToShow: 10,
        autoplay: true,
        autoplaySpeed: 1000,
    }

    return (
        <>
            {/* <h1>Products</h1> */}
           {/* { products.map((p) => <ProductCard name={p.title} price={p.price}/>)} */}
           
           <Slider {...settings} style={{display:'flex',flexDirection:'row'}} >
           { products.map((p) => <ProductCard {...p} key={p.id} handleMovieClick={handleMovieClick}/>)}
           </Slider>


                {/* {products.map((product) => <div 
                  key={product.id} 
                  onClick={() => handleMovieClick(product.id)}
                  style={{ display: 'flex', flexWrap: 'wrap', width: '10%' }}
                >
                    <h1 style={{ width: '200px' }}>{product.title}</h1>
                    <img src={product.imageUrl} style={{ width: '200px' }} />
                </div>)} */}

        </>
    );
};

export default APIHome;