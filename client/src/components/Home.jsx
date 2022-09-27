import {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemons,filterCreated, orderAlfhabetic, getTypes,filterByType,orderAttack } from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Loading from './Loading';
import style from './styles/home.module.css';
import logo from '../components/Img&Gif/Logo.png';
import PikaHass from '../components/Img&Gif/PikaHass.png';
import BtnHaz from './btnHaz'
function Home() {
    const dispatch= useDispatch();
    const allPokemons= useSelector((state)=> state.pokemons);//pokemons viene del reducer, es el initial state
    const Load= useSelector((state)=>state.loading)
    const allTypes= useSelector((state)=>state.types)
   // const error= useSelector((state)=>state.error)
    
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

  <div className={style.home}>
    <div>
      <img className={style.logo} src={logo} alt="Pokeimage not found" />
      <img className={style.logo} src={PikaHass} alt="Pokeimage not found" />
    </div>
      
      <div className={style.bigBox}>
        <div className={style.container}>
          <div className={style.menu}>
            <ul>
              <li>
               <BtnHaz />
              </li>
               
              <li>
                <button className={style.buttons} onClick={event=>{handlerBack(event)}}>
                  Volver a cargar todos los pokemones
                </button>
              </li>
              
              <li>
                <SearchBar
                setInput={setInput}
                setCurrentPage={setCurrentPage}
                setSelected={setSelected}
                allPokemons={allPokemons}
                />
              </li>
            </ul>
          </div>
          
          
          <div className={style.filtered}>
            <ul>
              <li>
                <select defaultValue="title"  onChange={event=>handlerSort(event)}>
                  <option value="title" selected={selected} disabled>
                   Ordenar Alfabeticamente
                  </option>
                  <option value="asc">A-Z</option>// el value es el payload del reducer
                  <option value="desc">Z-A</option>
                </select> 
              </li>
              <li>
                <select defaultValue="title" onChange={event=>handleFfilterCreated  (event)} >
                  <option value="title" selected={selected} disabled>
                     Filtrar por origen
                  </option>
                  <option value="All">Todos</option>
                  <option value="Created">Creados</option>
                  <option value="Existentes">Existentes</option>
                </select>
              </li>
              <li>
                <select defaultValue="title" onChange={(e) => handlerAttack(e)}>
                  <option value="title" selected={selected} disabled>
                    Filtrar por Ataque
                  </option>
                  <option value="Debil">Debil</option>
                  <option value="Poderoso">Poderoso</option>
                </select>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.pagination}>
        <Pagination
          PokesForPage={PokesForPage}//Estado local
          allPokemons={allPokemons.length}//useSelector-->state.Pokemons
          pagination={pagination}
        />
      </div>
      
      <div className={style.Render}>     
         { 
          Load? 
            <div><Loading/></div>
            :currentPokes && currentPokes.map(poke=>{
              return(
                <>               
                <Card
                    key={poke.id}
                    id={poke.id}
                    name={poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)} 
                    image={poke.img} 
                    type={ poke.itsCreated ? poke.types.map(t=>' '+t.name.charAt(0).toUpperCase()+ t.name.slice(1)+' '): poke.type }
                                                    
                />
                </>
              )
            })
          }
         
      </div>
     
    </div>
    
  )
}


export default Home;
    
