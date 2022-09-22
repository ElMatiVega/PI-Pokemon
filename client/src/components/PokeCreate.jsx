import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import  {useState, useEffect} from 'react';
import{postPokemon, getTypes} from '../actions/index';
import{ useDispatch, useSelector} from 'react-redux';


function validateForm(input){
  let errors= {};
  if(!/((?=.)^[a-zA-Z\s]{1,19}[a-zA-Z]$)|((?!._)^[a-zA-Z\s]{1,20}$)/.test(input.name)){ 
    errors.name= 'Se requiere un nombre';
  }else if(input.hp < 1 || input.hp > 200) { 
    errors.hp = 'Vida requiere un valor entre 0 y 200'

}else if(input.attack < 10 || input.attack > 150) {
  errors.attack = 'Ataque requiere un valor entre 10 y 150'

}else if(input.defense < 10 || input.defense > 150) {
  errors.defense = 'Defensa requiere un valor entre 10 y 150'

}else if(input.speed < 5 || input.speed > 150) {
  errors.speed = 'Velocidad requiere un valor entre 5 y 150'

}else if(input.height< 5 || input.height > 200) {
  errors.height = 'Se requiere un valor entre 5 y 200'

}else if(input.weight< 5 || input.weight > 200) {
  errors.weight = 'Se requiere un valor entre 5 y 200'

}else if(!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.img)) {
      errors.img= 'Se requiere una URL de tipo jpg,jpeg,webp,avif,gif,svg, Aviso: de no ser provista tendra una por defecto'

  } else if(input.types.length ===0 || input.type.length > 3) {
      errors.Types= 'Selecciona hasta 3 tipos'
  }
  return errors
}


function PokeCreate() {
    const dispatch= useDispatch();
    const history= useHistory();
    const pokesTypes= useSelector((state)=> state.types);
    const pokemons=useSelector((state)=>state.allPokemons);
    
  
    const [errors,setErrors] = useState({});
    const [input, setInput]= useState({
      name:'',
      hp:'',
      attack:'',
      defense:'',
      speed:'',
      height:'',
      weight:'',
      img:'',
      types:[],
  });
  
  useEffect(()=>{
    dispatch(getTypes());
    },[dispatch])
  
 function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validateForm({
        ...input,
        [e.target.name]: e.target.value
    }))
    console.log(input)

  }

  function handleSelect(e){
    setInput({
      ...input,
      types:[...input.types, e.target.value]
    })
  }

  function handleDelete(tipo) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== tipo),
    });
  }

function handleSubmit(e){
if( 
    errors.image === '' ||
    errors.name === ''  ||
    errors.height_min === ''|| 
    errors.height_max === '' ||
    errors.weight_min === '' ||
    errors.weight_max === '' ||
    errors.life_span === '')
 { e.preventDefault();
  dispatch(postPokemon(input));
  alert("Pokemon creado");
  setInput({
    name:'',
    hp:'',
    attack:'',
    defense:'',
    speed:'',
    height:'',
    weight:'',
    img:'',
    types:[],
  })
  history.push('/home')}else{
    return alert("Volvé a empezar, no puedo dejarte un mensaje mas lindo porque Henry no me deja")
  }
}


  

  return (
    <div>
    <Link to='/home'>Volver</Link><br />
     <h1>Crea tu Pokemon</h1> 
     <form onSubmit={handleSubmit}>
       <div>
         <label>Nombre:</label>
         <input 
          type='text'
          value={input.name} 
          name='name'
          placeholder="Nombre de tu Pokemon"
          onChange={handleChange}
          />
          {errors.name && <p className='error'>{errors.name}</p>}
       </div>
        <div>
         <label>Vida:</label>
         <input 
          type="number" 
          value={input.hp}
          name='hp'
          placeholder="vida de tu Pokemon"
          onChange={handleChange}/>
          {errors.hp && <p className='error'>{errors.hp}</p>}
       </div>
      <div>
         <label>Ataque:</label>
         <input 
         type="number" 
         value={input.attack} 
         name='attack'
         placeholder="Nivel de Ataque de tu Pokemon"
         onChange={handleChange}/>
         {errors.attack && <p className='error'>{errors.attack}</p>}
       </div>
       <div>
         <label>Defensa:</label>
         <input 
           type="number"
           value={input.defense}
           name='defense'
           placeholder="Nivel de defensa de tu Pokemon"
           onChange={handleChange}/>
           {errors.defense && <p className='error'>{errors.defense}</p>}
       </div>
       <div>
         <label>Velocidad:</label>
         <input 
         type="number" 
         value={input.speed} 
         name='speed'
         placeholder="Velocidad de tu Pokemon"
         onChange={handleChange}/>
         {errors.speed && <p className='error'>{errors.speed}</p>}
       </div>
       <div>
         <label>Altura:</label>
         <input 
          type="number" 
          value={input.height}
          name='height'
          placeholder="Altura de tu Pokemon"
          onChange={handleChange}/>
          {errors.height && <p className='error'>{errors.height}</p>}
       </div>
       <div>
         <label>Peso:</label>
         <input
          type="number" 
          value={input.weight} 
          name='weight'
          placeholder="Peso de tu Pokemon"
          onChange={handleChange}/>
          {errors.weight && <p className='error'>{errors.weight}</p>}
       </div>
       <div>
         <label>Imagen:</label>
         <input type="url" 
          value={input.img}
          name='img'
          placeholder="URL de la imagen"
          onChange={handleChange}/>
          {errors.img && <p className='error'>{errors.img}</p>}
       </div>
      
       <div>
        <lebel>Tipo:{" "}</lebel>
          <select onChange={handleSelect}>
            { pokesTypes.map((t)=>(
            <option value={t.name} key={t.id}>{t.name}</option>
            ))} 
          </select>
          <ul>
            <li>
              {input.types.map(elem=>elem +" ")}
            </li>
          </ul>
          <button >Crear</button>
       </div>
     </form>
    {input.types.map(elem=>
    <div>
      <p>{elem}</p>
      <button onClick={()=>handleDelete(elem)}>delete</button>
    </div>
    )}
   
    </div>
  )
}

export default PokeCreate