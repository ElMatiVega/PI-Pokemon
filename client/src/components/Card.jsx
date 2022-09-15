import React from 'react';
import { version } from 'react';

function Card({name, image, type,attack}) {
  return (
    <div>
      <h3> {name}</h3>
      <img src={image} alt="PokeImagen" width="200px" heigth="250px" />
      <h4>Tipo= {type.join(' ')}</h4><br />
      
    </div>
  )
}

export default Card

