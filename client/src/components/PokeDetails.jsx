import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{useEffect} from 'react';
import {getDetail} from '../actions/index';
import Loading from '../components/Loading'

function PokeDetails(props) {
    console.log(props)
    const id=props.match.params.id;
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getDetail(id))
    },[dispatch])

  const detailPoke= useSelector((state)=>state.pokeDetail);


  return (
    <div>
    {
      detailPoke.length>0 ?
      <div>
        <h1>Soy {detailPoke[0].name}</h1>
        <img src={detailPoke[0].img} alt='pokeImg' width='300px' heigth='300px'/>
        <h3>Tipos {detailPoke[0].itsCreated ? detailPoke[0].types.map(t=>t.name+' '): detailPoke[0].type }</h3>
        <p>Altura: {detailPoke[0].height}</p>
        <p>Ataque: {detailPoke[0].attack}</p>
        <p>Defensa:{detailPoke[0].defense}</p>
        <p>Peso: {detailPoke[0].weight}</p>
        <p>Velocidad: {detailPoke[0].speed}</p>
        <p>Vida: {detailPoke[0].hp}</p>
        
      </div>
      : <Loading/>
    }
    <Link to='/home'>
      <buttom>Volver</buttom>
    </Link>
    </div>
  )
}

export default PokeDetails