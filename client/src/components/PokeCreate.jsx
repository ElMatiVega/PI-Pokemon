import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import  {useState, useEffect} from 'react';
import{postPokemon, getTypes} from '../actions/index';
import{ useDispatch, useSelector} from 'react-redux';



function PokeCreate() {
    const dispatch= useDispatch();
    const history= useHistory();
    const pokesTypes= useSelector((state)=> state.types)
    const [input, setInput]= useState({
      name:'',
      life:'',
      attack:'',
      defense:'',
      speed:'',
      height:'',
      weight:'',
      img:'',
      types:[],
  });

 function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSelect(e){
    setInput({
      ...input,
      types:[...input.types, e.target.value]
    })
  }

function handleSubmit(e){
  e.preventDefault();
  dispatch(postPokemon(input));
  alert("Pokemon creado");
  setInput({
    name:'',
    life:'',
    attack:'',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    img:'',
    types:[],
  })
  history.push('/home')
}

  useEffect(()=>{
  dispatch(getTypes());
  },[dispatch])

  

  return (
    <div>
    <Link to='/home'>Volver</Link><br />
     <h1>Crea tu Pokemon</h1> 
     <form onSubmit={handleSubmit}>
       <div>
         <label>Nombre:</label>
         <input 
         type='text'
          // value={input.name} 
          name='name'
          onChange={handleChange}
          />

       </div>
        <div>
         <label>Vida:</label>
         <input 
         type="number" 
        //  value={input.life}
          name='life'
          onChange={handleChange}/>
       </div>
      <div>
         <label>Ataque:</label>
         <input type="number" 
         //value={input.attack} 
         name='attack'
         onChange={handleChange}/>
       </div>
       <div>
         <label>Defensa:</label>
         <input type="number"
          //value={input.defense}
           name='defense'
           onChange={handleChange}/>
       </div>
       <div>
         <label>Velocidad:</label>
         <input 
         type="number" 
         //value={input.speed} 
         name='speed'
         onChange={handleChange}/>
       </div>
       <div>
         <label>Altura:</label>
         <input 
         type="number" 
         //value={input.height}
          name='height'
          onChange={handleChange}/>
       </div>
       <div>
         <label>Peso:</label>
         <input
          type="number" 
          //value={input.weight} 
          name='weight'
          onChange={handleChange}/>
       </div>
       <div>
         <label>Imagen:</label>
         <input type="url" 
         //value={input.img}
          name='img'
          onChange={handleChange}/>
       </div>
       <div>

       </div>
       <div>
       <lebel>Tipo:{" "}</lebel>
        <select onChange={handleSelect}>
        { pokesTypes.map((t)=>(
          <option value={t.name}>{t.name}</option>
        ))} 
       </select>
       <ul><li>{input.types.map(elem=>elem +" ")}</li></ul>
       <button >Crear</button>
       </div>
     </form>
    
   
    </div>
  )
}

export default PokeCreate