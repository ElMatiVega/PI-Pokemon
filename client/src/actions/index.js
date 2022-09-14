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



// export function filterPokesbyType (){
//     return async function(dispatch){
//         var json = await axios.get("http://localhost:3001/types");
//        return dispatch({
//            type:'FILTER_BY_TYPE',
//            payload: json.data, 
//        })
//     }
// }