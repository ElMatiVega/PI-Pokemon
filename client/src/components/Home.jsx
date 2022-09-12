import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons} from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination'

function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);//pokemons viene del reducer, es el initial state
    
    
    //PAGINADO
    const [currentPage, setCurrentPage]= useState(1);
    const [PokesForPage, setPokesForPage]= useState(12);//es el número de pokes por pagina
    const lastPokePage= currentPage * PokesForPage;// 12
    const firstPokePage= lastPokePage - PokesForPage;//0
    const currentPokes= allPokemons.slice(firstPokePage, lastPokePage);

    const pagination=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

    function handlerBack (e){
        e.preventDefault();
        dispatch(getPokemons())
    }

    return (
    <div>
          <Pagination
          PokesForPage={PokesForPage}//Estado local
          allPokemons={allPokemons.length}//useSelector-->state.Pokemons
          pagination={pagination}

          />
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
             currentPokes && currentPokes.map(poke=>{
                  return(
                      <>
                        <Link to={`/home/${poke.id}`}  target="_blank" >
                        <Card name={poke.name} image={poke.img} type={poke.type} key={poke.id}/>
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



