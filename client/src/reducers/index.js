


const initialState={
    pokemons:[],
    allPokemons:[]
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_POKEMONS'://traigo la accion que trae a los pokemones
        return{
            ...state,
            pokemons: action.payload, 
            allPokemons:action.payload,
        }

        case "FILTER_CREATED":
            const allPokes = state.allPokemons;
            const pokeCreatedFilter= action.payload ==='Created' ? allPokes.filter(elem=>elem.itsCreated) : allPokes.filter(elem=>!elem.itsCreated)                    
            return{
                ...state,
                pokemons:action.payload === 'All' ? allPokes : pokeCreatedFilter
            }
        
        case 'ORDER_ALFHABETIC':
            let sortPokes= action.payload ==='asc'?
            state.pokemons.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                // a === b
                return 0;
              }) :
              state.pokemons.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
          
                return 0;
              });
              return{
                  ...state,
                  pokemons:sortPokes
              }



        // case 'FILTER_BY_TYPE':
        //         const allPokemons = state.pokemons
        //         const filterType= action.payload === 'all'? allPokemons : allPokemons.filter((p) =>
        //         p.types.map((t) => t.name).includes(action.payload)
        //       );
        //         return{
        //              ...state,
        //              pokemons: filterType
        //         }

        default:
            return{...state}
    }
};
export default rootReducer;
