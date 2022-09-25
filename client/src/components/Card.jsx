import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/Card.module.css';

//prop vienen del home
function Card({name, image, type,id}) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.img}>
            <Link to={`/pokeDetails/${id}`}  target="_blank" >
              <img src={image} alt="PokeImagen" width="200px" heigth="250px" />
          </Link>
        </div>
        <div className={style.content}>
          <h3> {name}</h3>
          <h4>Tipo:{type}</h4>
        </div>     
      </div>     
    </div>
  )
}

export default Card

