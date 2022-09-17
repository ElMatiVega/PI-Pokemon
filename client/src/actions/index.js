import axios from 'axios';
//import {GET_POKEMONS, FILTER_BY_TYPE} from '../actions/const_action.js';

export function getPokemons(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemons");//aca conecto con el Back
        return dispatch({
            type: 'GET_POKEMONS',
            payload:json.data,
        })
    }
}

export function filterCreated(pokeDB){
    return{
        type:"FILTER_CREATED",
        payload:pokeDB
    }
}

export function orderAlfhabetic(payload){
    return{
        type:'ORDER_ALFHABETIC',
        payload
    }
}

export function orderAttack(payload){
    return{
        type:'ORDER_ATTACK',
        payload
    }
}



// export function filterByType (payload) {
//     return {
//       type: 'FILTER_BY_TYPE',
//       payload,
//     };
//   };
  
  
  //BUSCO INFO QUERY para searchBar

export function getNamePokemons(name){
    return async function(dispatch){
        try {
            var pokeJson= await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type:"GET_NAME_POKEMONS",
                payload:pokeJson.data
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}

//Para crear poke
export function getTypes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types");
       return dispatch({
           type:'GET_TYPE',
           payload: json.data, 
       })
    }
}
//Post para agregar un poke
export function postPokemon(payload){
    return async function(dispatch){
        const info= await axios.post("http://localhost:3001/pokemons",payload)
        return info;
    }
}


