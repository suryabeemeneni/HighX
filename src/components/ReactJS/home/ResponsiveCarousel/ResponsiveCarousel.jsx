
// import './ResponsiveCarousel.css'

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ResponsiveCarousel = ({ cardCount }) => {
//   // Mock data for cards
//   const cards = Array.from({ length: 15 }, (_, index) => (
//     <div key={index} className="card">
//       {/* Your card content goes here */}
//       Card {index + 1}
//     </div>
//   ));

//   return (
//     <Carousel
//       showArrows
//       showStatus={false}
//       showIndicators={false}
//       showThumbs={false}
//       infiniteLoop
//       autoPlay
//       interval={3000}
//       stopOnHover
//       swipeable
//       dynamicHeight
//     >
//       {cards}
//     </Carousel>
//   );
// };

// export default ResponsiveCarousel;





// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ResponsiveCarousel = () => {
//   const getWindowWidth = () => window.innerWidth;

//   const getSlidesToShow = () => {
//     const windowWidth = getWindowWidth();

//     if (windowWidth >= 768) {
//       return 5; // Display 5 cards in a row
//     } else if (windowWidth >= 480) {
//       return 3; // Display 3 cards in a row
//     } else {
//       return 1; // Display 1 card in a row
//     }
//   };

//   // Mock data for cards
//   const cards = Array.from({ length: 15 }, (_, index) => (
//     <div key={index} className="card">
//       {/* Your card content goes here */}
//       Card {index + 1}
//     </div>
//   ));

//   return (
//     <div className="carousel-container">
//       <Carousel
//         showArrows
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         infiniteLoop
//         autoPlay
//         interval={3000}
//         stopOnHover
//         swipeable
//         dynamicHeight
//         slidesToShow={getSlidesToShow()} // Dynamically set the number of slides to show
//       >
//         {cards}
//       </Carousel>
//     </div>
//   );
// };

// export default ResponsiveCarousel;





// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ResponsiveCarousel = () => {
//   // Mock data for cards
//   const cards = Array.from({ length: 15 }, (_, index) => (
//     <div key={index} className="card">
//       {/* Your card content goes here */}
//       Card {index + 1}
//     </div>
//   ));

//   return (
//     <div className="carousel-container">
//       <Carousel
//         showArrows
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         infiniteLoop
//         autoPlay
//         interval={3000}
//         stopOnHover
//         swipeable
//         dynamicHeight
//         centerMode={false}
//         emulateTouch
//         swipeScrollTolerance={5}
//         // renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         //   hasPrev && (
//         //     <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
//         //       Previous
//         //     </button>
//         //   )
//         // }
//         // renderArrowNext={(onClickHandler, hasNext, label) =>
//         //   hasNext && (
//         //     <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
//         //       Next
//         //     </button>
//         //   )
//         // }
//         centerSlidePercentage={20}
//         // emulateTouch
//         swipeScrollTolerance={5}
//       >
//         {cards}
//       </Carousel>
//     </div>
//   );
// };

// export default ResponsiveCarousel;




// ResponsiveCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ResponsiveCarousel = () => {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Mock data for cards
//   const cards = Array.from({ length: 15 }, (_, index) => (
//     <div key={index} className="card">
//       {/* Your card content goes here */}
//       Card {index + 1}
//     </div>
//   ));

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>{cards}</Slider>
//     </div>
//   );
// };




const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // Change this to the number of cards you want to display
  slidesToScroll: 5, // Change this to the number of cards you want to scroll
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true, // pause on hover
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Mock data for cards
const cards = Array.from({ length: 15 }, (_, index) => (
  <div key={index} className="Rcard">
    {/* Your card content goes here */}
    Card {index + 1}
  </div>
));

return (
  <div className="carousel-container">
          <h1>Responsive Auto-Sliding Carousel</h1>
    <Slider {...settings}>{cards}</Slider>
  </div>
);
};

export default ResponsiveCarousel;