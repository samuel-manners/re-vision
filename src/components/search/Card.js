import React from 'react';

function Card({item}) {
  return(
    //Card Div then details div
    <div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
//Code for adding image to card
//<img className="br-100 h3 w3 dib" alt={item.name} src={process.env.PUBLIC_URL + person.imgPath} />
export default Card;