import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import{useEffect} from 'react';
import {pokeRandom,getPokemons} from '../actions/index';
import style from './styles/pokeDetail.module.css';
import BtnBackDetail from './buttons/btnBackDetail';


function PokeRandom() {
  const poke= useSelector((state)=>state.pokemons)
  console.log(poke)
  let pokemon=poke[Math.floor(Math.random()* poke.length)]
  const poke_Random= useSelector((state)=>state.Poke_Random)
   console.log(poke_Random)
const dispatch = useDispatch();
  

useEffect(()=>{
  dispatch(getPokemons())        
    },[dispatch])
    
function handlerRandom (e){
  e.preventDefault(e);
  dispatch(pokeRandom());
 
}


  return (
    <div>
        <button className={style.buttons} onClick={event=>        {handlerRandom(event)}}>
                  Poke Aleatorio
        </button>
      {
        pokemon?
        <div className={style.BGDetail}>
        <div className={style.grup}>
        <h1>Soy { pokemon.name}</h1>
        <img className={style.imagencita}src={ pokemon.img2? pokemon.img2: pokemon.img} alt='pokeImg' />

        </div>
        <div className={style.PokeDetails}>
          <h3>Tipo: { pokemon.itsCreated ?  pokemon.types.map(t=>t.name+' '):  pokemon.type }</h3>
          <p>ID: { pokemon.id}</p>
          <p>Altura: { pokemon.height}</p>
          <p>Ataque: { pokemon.attack}</p>
          <p>Defensa:{ pokemon.defense}</p>
          <p>Peso: { pokemon.weight}</p>
          <p>Velocidad: { pokemon.speed}</p>
          <p>Vida: { pokemon.hp}</p>
        </div>
       </div>
       :
        <div className={style.BGDetail}>
        <div className={style.grup}>
           <h1>Soy { poke_Random.name}</h1>
           <img className={style.imagencita}src={ poke_Random.img2? poke_Random.img2: poke_Random.img} alt='pokeImg' />

        </div>
        <div className={style.PokeDetails}>
            <h3>Tipo: { poke_Random.itsCreated ?  poke_Random.types.map(t=>t.name+' '):  poke_Random.type }</h3>
            <p>ID: { poke_Random.id}</p>
            <p>Altura: { poke_Random.height}</p>
            <p>Ataque: { poke_Random.attack}</p>
            <p>Defensa:{ poke_Random.defense}</p>
            <p>Peso: { poke_Random.weight}</p>
            <p>Velocidad: { poke_Random.speed}</p>
            <p>Vida: { poke_Random.hp}</p>
        </div>
      </div>
        
      }
    <div>
      <BtnBackDetail />
    </div>
  
    </div>
  )
}

export default PokeRandom