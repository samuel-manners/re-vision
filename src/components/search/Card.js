import React from 'react';

function Card({item}) {
  return(
    //Card Div then details div
    <div>
      <div>
        <h3>{item.name}</h3>
        <p>Description: {item.description}</p>
        <p>Brand: {item.brand}</p>
        <p>Type of Recycling: {item.recycleType}</p>
      </div>
    </div>
  );
}
//Code for adding image to card
//<img className="br-100 h3 w3 dib" alt={item.name} src={process.env.PUBLIC_URL + person.imgPath} />
export default Card;