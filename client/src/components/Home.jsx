import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons,filterCreated} from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination'

function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);//pokemons viene del reducer, es el initial state
    
    
    //PAGINADO
    const [currentPage, setCurrentPage]= useState(1);
    const [PokesForPage]= useState(12);//es el número de pokes por pagina
    const lastPokePage= currentPage * PokesForPage;// 12
    const firstPokePage= lastPokePage - PokesForPage;//0
    const currentPokes= allPokemons.slice(firstPokePage, lastPokePage);

    const pagination=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getPokemons())
    },[])

    function handlerBack (e){
        e.preventDefault();
        dispatch(getPokemons())
    }

    // function handlerFilterTypes(e){
    //     e.preventDefault(e);
    //     dispatch( filterPokesbyType(e.target.value))
        
    // }

    function handleFfilterCreated(e){
        dispatch (filterCreated(e.target.value)) 
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
      {/* <select onChange={event=>handlerFilterTypes(event)}> */}
          <select >
              <option value="normal">normal</option>
              <option value="flying">flying</option>
              <option value="fighting">fighting</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>
              <option value="bug">bug</option>
              <option value="ghost">ghost</option>
              <option value="steel">steel</option>
              <option value="rock">rock</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="grass">grass</option>
              <option value="electric">electric</option>
              <option value="psychic">psychic</option>
              <option value="ice">ice</option>
              <option value="dragon">dragon</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
              <option value="unknown">unknown</option>
              <option value="shadow">shadow</option>
          </select>


          <select onChange={event=>handleFfilterCreated(event)} >
              <option value="All">Todos</option>
              <option value="Created">Creados</option>
              <option value="Existentes">Existentes</option>
          </select>

         


          {
             currentPokes && currentPokes.map(poke=>{
                 console.log(currentPokes)
                  return(
                      <>
                        <Link to={`/home/${poke.id}`}  target="_blank" >
                        <Card
                            key={poke.id}
                            name={poke.name} 
                            image={poke.img} 
                            type={poke.type.join(' || ')}
                        />
                        
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



