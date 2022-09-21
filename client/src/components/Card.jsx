import React from 'react';

//prop vienen del home
function Card({name, image, type}) {
  return (
    <div>
      <h3> {name}</h3>
      <img src={image} alt="PokeImagen" width="200px" heigth="250px" />
      <h4>Tipo:{type}</h4>
      <br />
      
    </div>
  )
}

export default Card

