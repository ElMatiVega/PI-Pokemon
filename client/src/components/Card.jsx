import React from 'react';

function Card({name, image, type}) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{type}</h4>
      <img src={image} alt="PokeImagen" width="200px" heigth="250px" />
    </div>
  )
}

export default Card
