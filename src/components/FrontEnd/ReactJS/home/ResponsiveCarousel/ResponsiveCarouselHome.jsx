// import React from 'react';
// import ResponsiveCarousel from './ResponsiveCarousel';
// import './ResponsiveCarousel.css'

// const ResponsiveCarouselHome = () => {
//   return (
//  
//       {/* <h1>Responsive Auto-Sliding Carousel</h1> */}

//       {/* 1 Card Carousel for screen width below 480px */}
//       <div className="carousel-container">
//         <ResponsiveCarousel cardCount={1} />
//   

//       {/* 3 Card Carousel for screen width between 480px and 768px */}
//       <div className="carousel-container">
//         <ResponsiveCarousel cardCount={3} />
//   

//       {/* 5 Card Carousel for screen width above 768px */}
//       <div className="carousel-container">
//         {/* <ResponsiveCarousel cardCount={5} /> */}
//   
// 
//   );
// };

// export default ResponsiveCarouselHome;




// import React from 'react';
// import ResponsiveCarousel from './ResponsiveCarousel';
// // import './styles.css';

// const ResponsiveCarouselHome = () => {
//   return (
//  
//       <h1>Responsive Auto-Sliding Carousel</h1>

//       <ResponsiveCarousel />
// 
//   );
// };

// export default ResponsiveCarouselHome;





// App.js
import React from 'react';
import ResponsiveCarousel from './ResponsiveCarousel';
// import './styles.css';
import './ResponsiveCarousel.css'
import Team from './team/Team';

const App = () => {
  return (
    <>
      <ResponsiveCarousel />

      <Team/>

    </>
  );
};

export default App;