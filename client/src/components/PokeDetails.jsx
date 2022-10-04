import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{useEffect} from 'react';
import {getDetail, deletePokemon} from '../actions/index';
import Loading from '../components/Loading';
import style from './styles/pokeDetail.module.css';
import BtnBackDetail from './buttons/btnBackDetail';
import BtnDelete from './buttons/BtnDelete';

function PokeDetails(props) {
    //console.log(props)
    const id=props.match.params.id;
    const history = useHistory();
    const dispatch = useDispatch();
    const detailPoke= useSelector((state)=>state.pokeDetail);

    useEffect(()=>{
        dispatch(getDetail(id));
        
    },[dispatch,id])

    const handleDelete = (id) => {
    
      dispatch(deletePokemon(id));
      alert("Tu Pokemon ha sido borrado");
      history.push("/home");
    };


  return (
    <div>
    {
      detailPoke.length>0 ?
      <div className={style.BGDetail}>
        <div className={style.grup}>
           <h1>Soy {detailPoke[0].name}</h1>
           <img className={style.imagencita}src={detailPoke[0].img2?detailPoke[0].img2:detailPoke[0].img} alt='pokeImg' />
           <div className={style.deletePoke}>
              {
                detailPoke[0].itsCreated
                ?< BtnDelete handleDelete={handleDelete} id={detailPoke[0].id}/>
                :console.log("chiringuito") 
              } 
           </div>
        </div>
        <div className={style.PokeDetails}>
            <h3>Tipo: {detailPoke[0].itsCreated ? detailPoke[0].types.map(t=>t.name+' '): detailPoke[0].type }</h3>
            <p>ID: {detailPoke[0].id}</p>
            <p>Altura: {detailPoke[0].height}</p>
            <p>Ataque: {detailPoke[0].attack}</p>
            <p>Defensa:{detailPoke[0].defense}</p>
            <p>Peso: {detailPoke[0].weight}</p>
            <p>Velocidad: {detailPoke[0].speed}</p>
            <p>Vida: {detailPoke[0].hp}</p>
        </div>
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