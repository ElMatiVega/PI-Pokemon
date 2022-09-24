import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons,filterCreated, orderAlfhabetic, getTypes,filterByType,orderAttack } from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Loading from './Loading';


function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);//pokemons viene del reducer, es el initial state
    const Load= useSelector((state)=>state.loading)
    const allTypes= useSelector((state)=>state.types)
    
    //PAGINADO
    const [currentPage, setCurrentPage]= useState(1);
    const [PokesForPage]= useState(12);//es el número de pokes por pagina
    const lastPokePage= currentPage * PokesForPage;// 12
    const firstPokePage= lastPokePage - PokesForPage;//0
    const currentPokes= allPokemons.slice(firstPokePage, lastPokePage);
   
    const [input, setInput] = useState(1)

    const [selected, setSelected] = useState(false);


useEffect(()=>{
      dispatch(getPokemons());
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


    function handlerBack (e){
        e.preventDefault();
        dispatch(getPokemons());
       
    }

    const handleTypeOptions = (e) => {
        e.preventDefault(e);
        dispatch(filterByType(e.target.value));
        setInput(1);
        setCurrentPage(1);
       
      };

    function handleFfilterCreated(e){
      dispatch (filterCreated(e.target.value)) 
     
    }
    
return (
  <div>
      
    <Link to='/PokeCreate'>Haz tu Poke</Link> 
         
    <Pagination
        PokesForPage={PokesForPage}//Estado local
        allPokemons={allPokemons.length}//useSelector-->state.Pokemons
        pagination={pagination}
    />
      
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
          Load? 
            <div><Loading/></div>
            :currentPokes && currentPokes.map(poke=>{
                return(
                    <>
                      <Link to={`/pokeDetails/${poke.id}`}  target="_blank" >
                      <Card
                            key={poke.id}
                            name={poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)} 
                            image={poke.img} 
                            type={ poke.itsCreated ? poke.types.map(t=>' '+t.name.charAt(0).toUpperCase()+ t.name.slice(1)+' '): poke.type }
                                                    
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
    
