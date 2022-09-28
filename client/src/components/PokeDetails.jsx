import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{useEffect} from 'react';
import {getDetail} from '../actions/index';
import Loading from '../components/Loading';
import style from './styles/pokeDetail.module.css'
import BtnBackDetail from './buttons/btnBackDetail'

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
      <div className={style.BGDetail}>
        <div >
           <h1>Soy {detailPoke[0].name}</h1>
           <img className={style.imagencita}src={detailPoke[0].img2} alt='pokeImg' />

        </div>
        <div className={style.PokeDetails}>
            <h3>Tipos {detailPoke[0].itsCreated ? detailPoke[0].types.map(t=>t.name+' '): detailPoke[0].type }</h3>
            <p>Altura: {detailPoke[0].height}</p>
            <p>Ataque: {detailPoke[0].attack}</p>
            <p>Defensa:{detailPoke[0].defense}</p>
            <p>Peso: {detailPoke[0].weight}</p>
            <p>Velocidad: {detailPoke[0].speed}</p>
            <p>Vida: {detailPoke[0].hp}</p>
        </div>
       

        {/* <div className={`${styles.contenedorcito}`}>
      <button className={`${styles.botoncito}`}onClick={aseguraOnClose}> X </button>
      <h3 className={`${styles.namecita}`}> {name} </h3>
      <img className={`${styles.imagencita}`} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='img'  /> 
     <div className={`${styles.temperaturitas}`}>
      <p> Temp. Max. {`${ max}`}</p>
      <p>Temp. Min. {`${min}`} </p>
      </div>
     </div>  */}

      </div>
      : <Loading/>
    }
    <div>
      <BtnBackDetail />
    </div>
  
    </div>
  )
}

export default PokeDetails