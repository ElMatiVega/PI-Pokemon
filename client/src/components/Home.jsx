import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';

function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

    function handlerBack (e){
        e.preventDefault();
        dispatch(getPokemons())
    }

    return (
    <div>
      <Link to='/pokemons'>Crea tu Pokemon</Link>
      <h1>Hola pokemon!!!</h1>
      <button onClick={event=>{handlerBack(event)}}>
          Volver a cargar todos los pokemones
      </button>
      <div>
          <select>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <select>
              <option value="Normal">normal</option>
              <option value="Flying">flying</option>
              <option value="Fighting">fighting</option>
              <option value="Poison">poison</option>
              <option value="Ground">ground</option>
              <option value="Bug">bug</option>
              <option value="Ghost">ghost</option>
              <option value="Steel">steel</option>
              <option value="Rock">rock</option>
              <option value="Fire">fire</option>
              <option value="Water">water</option>
              <option value="Grass">grass</option>
              <option value="Electric">electric</option>
              <option value="Psychic">psychic</option>
              <option value="Ice">ice</option>
              <option value="Dragon">dragon</option>
              <option value="Dark">dark</option>
              <option value="Fairy">fairy</option>
              <option value="Unknown">unknown</option>
              <option value="Shadow">shadow</option>
          </select>
          <select>
              <option value="All">Todos</option>
              <option value="Created">Creados</option>
              <option value="Existentes">Existentes</option>
          </select>
          {
             allPokemons?.map(poke=>{
                  return(
                      <>
                        <Link to={`/home/${poke.id}`} >
                        <Card name={poke.name} image={poke.img} type={poke.type}/>
                        </Link>
                      </>
                  )
              })
          }
      </div>
    </div>
  )
}

export default Home;



