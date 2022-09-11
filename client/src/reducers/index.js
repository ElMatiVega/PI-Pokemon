const initialState={
    pokemons:[],
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case'GET_POKEMONS'://traigo la accion que trae a los pokemones
        return{
            ...state,
            pokemons: action.payload
        }


        default:
            return{...state}
    }
};
export default rootReducer;
