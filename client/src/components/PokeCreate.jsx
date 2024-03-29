import React from 'react';
import { useHistory} from 'react-router-dom'
import  {useState, useEffect} from 'react';
import{postPokemon, getTypes} from '../actions/index';
import{ useDispatch, useSelector} from 'react-redux';
import style from './styles/pokeCreate.module.css';
import Btn1 from './buttons/btn1';
import Btn2 from './buttons/btn2';


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

}else if(input.height < 5 || input.height > 200) {
  errors.height = 'Altura requiere un valor entre 5 y 200'

}else if(input.weight < 5 || input.weight > 200) {
  errors.weight = 'Peso requiere un valor entre 5 y 200'
} 
  return errors
}


function PokeCreate() {
    const dispatch= useDispatch();
    const history= useHistory();
    const pokesTypes= useSelector((state)=> state.types);
   
    
  
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
  if (
    input.name  &&
    input.attack &&
    input.defense &&
    input.speed &&
    input.height &&
    input.weight &&
    input.hp &&
    input.types.length > 0 && input.types.length < 4)
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
    return alert("Lo siento, faltan campos por completar correctamente")
  }
}


  

  return (
    <div className={style.CreateCointainer}>
      <h1 className={style.h1} >Crea tu Pokemon</h1>
      {input.types.map(elem=> 
                      <div className={style.divType} >
                        <button className={style.btnDelete} onClick={()=>handleDelete(elem)}>{elem}  X</button>
                      </div>
                    )
                }
      <div className={style.Main}>
      
        <form >
          <div className={style.Left}>
            <div className={style.divCreate}>
              <label>Nombre:</label>
              <input 
                className={style.inputCreate}
                type='text'
                value={input.name} 
                name='name'
                placeholder="Nombre de tu Pokemon"
                onChange={handleChange}
              />
             {errors.name && <p className={style.error}>{errors.name}</p>}
            </div>
            <br />
            <div className={style.divCreate}>
              <label>Imagen:</label>
              <input 
                    className={style.inputCreate}
                    type="url" 
                    value={input.img}
                    name='img'
                    placeholder="URL /jpg,jpeg,webp,avif,gif,svg o se generará automaticamente "
                    onChange={handleChange}
              />
              
            </div>
            <br />
            <div className={style.divCreate}>
              <lebel className={style.tipo}>Tipo:{" "}</lebel>
              <select className={style.tipoSelect} onChange={handleSelect}>
                { pokesTypes.map((t)=>(
                  <option className={style.tipoOption} value={t.name} key={t.id}>{t.name}</option>
                  ))
                } 
               
              </select>
              {errors.types && <p className={style.error}>{errors.types}</p>}
              
               
            </div>
          </div>
          
          <div className={style.Right}>
            <div className={style.divCreate}>
              <label>Vida:</label>
              <input 
                className={style.inputCreate}
                min='0'
                max='200'
                type="number" 
                value={input.hp}
                name='hp'
                placeholder="0 <-> 200"
                onChange={handleChange}
              />
             {errors.hp && <p className={style.error}>{errors.hp}</p>}
            </div>
            <br />
            <div className={style.divCreate}>
              <label>Ataque:</label>
              <input 
                className={style.inputCreate}
                min='10'
                max='150'
                type="number" 
                value={input.attack} 
                name='attack'
                placeholder="10 <-> 150"
                onChange={handleChange}/>
              {errors.attack && <p className={style.error}>{errors.attack}</p>}
            </div>
            <br />
            <div className={style.divCreate}>
              <label>Defensa:</label>
              <input 
                className={style.inputCreate}
                min='10'
                max='150'
                type="number"
                value={input.defense}
                name='defense'
                placeholder="10 <-> 150"
                onChange={handleChange}/>
              {errors.defense && <p className={style.error}>{errors.defense}</p>}
            </div>
            <br />
            <div className={style.divCreate}>
              <label>Velocidad:</label>
              <input 
                className={style.inputCreate}
                min='5'
                max='150'
                type="number" 
                value={input.speed} 
                name='speed'
                placeholder="5 <-> 150"
                onChange={handleChange}/>
              {errors.speed && <p className={style.error}>{errors.speed}</p>}
            </div>
            <br />
            <div className={style.divCreate}> 
              <label>Altura:</label>
              <input 
                className={style.inputCreate}
                min='5'
                max='200'
                type="number" 
                value={input.height}
                name='height'
                placeholder="5 <-> 200"
                onChange={handleChange}/>
                {errors.height && <p className={style.error}>{errors.height}</p>}
            </div>
            <div className={style.divCreate}>
              <label>Peso:</label>
              <input
                 className={style.inputCreate}
                 min='5'
                 max='200'
                type="number" 
                value={input.weight} 
                name='weight'
                placeholder="5 <-> 200"
                onChange={handleChange}/>
              {errors.weight && <p className={style.error}>{errors.weight}</p>}
            </div>
       
       </div>
      
      </form>
    </div>
    <div>
    <Btn1 handleSubmit={handleSubmit} className={style.btn1}/>
    <Btn2 />
    </div>
   
  </div>
  )
}

export default PokeCreate