// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Try removing this line
// import './AutoSlidingCarousel.css';

// // const AutoSlidingCarousel = ({ cards, autoplayInterval = 3000 }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
// //     }, autoplayInterval);

// //     return () => clearInterval(intervalId);
// //   }, [cards, autoplayInterval]);


// // const AutoSlidingCarousel = ({ cards, autoplayInterval = 3000 }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [initialSlide, setInitialSlide] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       if (currentIndex < cards.length - 4) {
// //         setCurrentIndex((prevIndex) => prevIndex + 1);
// //       } else {
// //         setCurrentIndex(0);
// //         setInitialSlide(1);
// //       }
// //     }, autoplayInterval);

// //     return () => clearInterval(intervalId);
// //   }, [cards, currentIndex, autoplayInterval]);

// const AutoSlidingCarousel = ({ cards, autoplayInterval = 3000 }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(cards.length / 4));
//     }, autoplayInterval);

//     return () => clearInterval(intervalId);
//   }, [cards, autoplayInterval]);

//   return (
//     <Carousel
//       selectedItem={currentSlide}
//       autoPlay
//       interval={autoplayInterval}
//       infiniteLoop
//       showArrows={false}
//       showStatus={false}
//       showThumbs={false}
//     >
//       {/* {Array.from({ length: Math.ceil(cards.length / 4) }).map((_, slideIndex) => (
//         <div key={slideIndex} className="carousel-slide">
//           <div className="carousel-row"> */}
//            {Array.from({ length: Math.ceil(cards.length / 4) }).map((_, slideIndex) => (
//         <div key={slideIndex} className="carousel-slide">
//           <div className="carousel-row">
//             {cards.slice(slideIndex * 4, (slideIndex + 1) * 4).map((card, index) => (
//               <div key={index} className="carousel-card" onMouseEnter={handleCardHover}
//               onMouseLeave={handleCardLeave}>
//                 {card}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default AutoSlidingCarousel;