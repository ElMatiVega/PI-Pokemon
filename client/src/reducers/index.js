


const initialState={
    pokemons:[],
    allPokemons:[],
    types: [],
    pokemonsByType: [],
    pokemonsByOrigin: [],
    error: null,
   
  
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'GET_POKEMONS'://traigo la accion que trae a los pokemones
        return{
            ...state,
            pokemons: action.payload, 
            allPokemons:action.payload, 
            pokemonsByOrigin: action.payload,
            pokemonsByType: action.payload,
            error: null,

        }


        case 'GET_TYPES':
        return { ...state, types: action.payload };


        case'FILTER_BY_TYPE':
        const allPokemons = state.allPokemons;
        const filteredByType =
        action.payload === "all"
          ? allPokemons
          : allPokemons?.filter((p) =>
              p.types.map((t) => t.name).includes(action.payload)
            );
        const commonPokes1 =
        state.pokemonsByOrigin.length > 0
          ? filteredByType.filter((p) => state.pokemonsByOrigin.includes(p))
          : filteredByType;
        return {
        ...state,
        pokemonsByType: filteredByType,
        pokemons: commonPokes1,
        error:
          commonPokes1.length === 0
            ? { message: "pokemon no creado" }
            : null,
      };



        case "FILTER_CREATED":
            const allPokes = state.allPokemons;
            const pokeCreatedFilter= action.payload ==='Created' ? allPokes.filter(elem=>elem.itsCreated) : allPokes.filter(elem=>!elem.itsCreated)                    
            return{
                ...state,
                pokemons:action.payload === 'All' ? allPokes : pokeCreatedFilter
            }
        
        case 'ORDER_ALFHABETIC':
          const pokes = state.pokemons;
            let sortPokes= action.payload ==='asc'
            ? pokes.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                // a === b
                return 0;
              }) 
              :pokes.sort(function (a, b) {
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

        case 'ORDER_ATTACK':
          let pokeAttack=state.pokemons
          let sortPokeAttack= action.payload ==='Debil'?
          pokeAttack.sort(function (a, b) {
            if (a.attack=== null) {
              return 0;
          }
              if (a.attack > b.attack) {
                return 1;
              }
              if (a.attack < b.attack) {
                return -1;
              }
              // a === b
              return 0;
            }) :
            pokeAttack.sort(function (a, b) {
              if (a.attack === null) {
                return 0;
            }
              if (a.attack < b.attack) {
                return 1;
              }
              if (a.attack > b.attack) {
                return -1;
              }        
              return 0;
            });
            return{
                ...state,
                pokemons:sortPokeAttack
            }

        case "GET_NAME_POKEMONS"://para el searchBar
          return{
            ...state,
            pokemons:action.payload
          }

          case "POST_POKEMON":
            return{
              ...state,
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
