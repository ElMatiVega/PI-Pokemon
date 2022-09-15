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




export function getTypes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types");
console.log(json.data)
       return dispatch({
           type:'GET_TYPE',
           payload: json.data, 
       })
    }
}

export const filterByType = (payload) => {
    return {
      type: 'FILTER_BY_TYPE',
      payload,
    };
  };
