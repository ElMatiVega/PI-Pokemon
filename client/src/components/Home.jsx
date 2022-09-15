import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons,filterCreated, orderAlfhabetic, getTypes,filterByType,orderAttack } from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination'
import SearchBar from './SearchBar';

function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);//pokemons viene del reducer, es el initial state
    const allTypes= useSelector((state)=>state.type)
    
    //PAGINADO
    const [currentPage, setCurrentPage]= useState(1);
    const [PokesForPage]= useState(12);//es el número de pokes por pagina
    const lastPokePage= currentPage * PokesForPage;// 12
    const firstPokePage= lastPokePage - PokesForPage;//0
    const currentPokes= allPokemons.slice(firstPokePage, lastPokePage);
   
    const [input, setInput] = useState(1)

    const [selected, setSelected] = useState(false);


useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes());
    },[dispatch]);


    const pagination=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

 
const [order, setOrder]= useState('')

 //Ordenar ALFABETICAMENTE
function handlerSort(e){
    e.preventDefault();
    dispatch(orderAlfhabetic(e.target.value))
    dispatch(orderAttack())
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
  }

//order Attack

function handlerAttack(e){
  e.preventDefault();
  dispatch(orderAttack(e.target.value))
  setOrder(`Ordenado ${e.target.value}`)
  setCurrentPage(1);
  setInput(1);
}

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes());
    },[dispatch])

    function handlerBack (e){
        e.preventDefault();
        dispatch(getPokemons());
        
    }

    const handleTypeOptions = (e) => {
        e.preventDefault(e);
        dispatch(getTypes(e.target.value));
        setInput(1);
        setCurrentPage(1);
      };

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

     
          <select defaultValue="title"  onChange={event=>handlerSort(event)}>
          <option value="title" selected={selected} disabled>
              Ordenar Alfabeticamente
              </option>
            <option value="asc">A-Z</option>// el value es el payload del reducer
            <option value="desc">Z-A</option>
          </select>

     

    <select defaultValue="title" onChange={(e) => handleTypeOptions(e)}>
    <option value="title" selected={selected} disabled>
                    Filtrar por Tipo
    </option>
                  <option value="all">All</option>
                  {allTypes?.map((t) => {
                    return (
                      <option value={t.name} key={t.id}>
                        {t.name}
                      </option>
                    );
                  })}
     </select>


          <select defaultValue="title" onChange={event=>handleFfilterCreated(event)} >
              <option value="title" selected={selected} disabled>
              Filtrar por origen
              </option>
              <option value="All">Todos</option>
              <option value="Created">Creados</option>
              <option value="Existentes">Existentes</option>
          </select>

          <select defaultValue="title" onChange={(e) => handlerAttack(e)}>
                  <option value="title" selected={selected} disabled>
                    Filtrar por Ataque
                  </option>
                  <option value="Debil">Debil</option>
                  <option value="Poderoso">Poderoso</option>
                </select>

          
          <SearchBar
           setInput={setInput}
           setCurrentPage={setCurrentPage}
           setSelected={setSelected}
          />


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
                            type={poke.type}
                            
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
     {/* Filter TYPES */}
      {/* <select onChange={event=>handlerFilterTypes(event)}> */}
          {/* <select >
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
          </select> */}


