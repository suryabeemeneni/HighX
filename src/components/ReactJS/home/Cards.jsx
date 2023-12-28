import React from 'react';


const Card = ({ title, content, imageSrc, price, onClick }) => (
<div className="card"
style={{ border: '1px solid #ccc', padding: '16px', margin: '400px', borderRadius: '8px', textAlign: 'center', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',  }}>
<h2>{title}</h2>
<img src={imageSrc} alt={`${title} Image`} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }} />
<p>{content}</p>
<p>Price: ${price}</p>
<button onClick={onClick}>Buy</button>                              
</div>
)


// const Card = ({ title, content, imageSrc, price, onClick }) => (
//   <div className="card">
//     <h2>{title}</h2>
//     {/* <img src={imageSrc} alt={${title} Image} /> */}
//     <p>{content}</p>
//     <p>Price: ${price}</p>
//     <button onClick={onClick}>Click me</button>
//   </div>
// );


const CardList = () => {
  const cardsData = [


    { id:  1, title: 'Card 1', content: 'For Sale', imageSrc: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg', price: 10.99 },
    { id: 2, title: 'Card 2', content: 'For Rent', imageSrc: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg', price: 19.99 },
    { id: 3, title: 'Card 3', content: 'Sold Out', imageSrc: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg', price: 14.99 },
    { id: 4, title: 'Card 4', content: 'For Sale', imageSrc: 'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg', price: 14.99 },
    { id: 5, title: 'Card 5', content: 'Sold Out', imageSrc: 'https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_640.jpg', price: 14.99 },
  ];
 
  return (
<div style={{display:"flex", flexDirection:"row"}}>
      {cardsData.map((card) => (
<Card
          key={card.id}
          title={card.title}
          content={card.content}
          imageSrc={card.imageSrc}
          price={card.price}
          onClick={() => alert(`Button clicked on ${card.title}`)}
        />
      ))}
</div>
  );
};
 
export default CardList;