


const initialState={
    pokemons:[],
    allPokemons:[],
    types: [],
    error: null,
    pokeDetail:[],
    loading:true
  
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case 'WAITING':
          return{
            ...state,
            loading:true
          }
        case 'GET_POKEMONS'://traigo la accion que trae a los pokemones
        return{
            ...state,
            pokemons: action.payload, 
            allPokemons:action.payload, 
            error: null,
            loading:false

        }

        case 'POKE_RANDOM':
          let pokeRandom=  state.pokemons;
          let thePoke= pokeRandom[Math.floor(Math.random()* pokeRandom.length)]
          console.log(thePoke)
          return{
            ...state,
            pokemons:thePoke
          }


        case 'GET_TYPE':
        return { ...state, types: action.payload };


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
                if (b.name > a.name) {
                  return -1;
                }
                // a === b
                return 0;
              }) 
              :pokes.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;               
                }
             return 0;
              });
              return{
                  ...state,
                  pokemons:sortPokes
              }

        case 'ORDER_TOP5':
          let top5Pokes= state.allPokemons;
          let topFivesPokes= action.payload ==='topweak'?
          top5Pokes.sort(function (a, b) {
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
            top5Pokes.sort(function (a, b) {
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
                pokemons:topFivesPokes.slice(0,5)
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
          };

        case "POST_POKEMON":
            return{
              ...state,
            };
            
        case "GET_DETAILS":
          return{
            ...state,
            pokeDetail:action.payload 
          };

        case 'FILTER_BY_TYPE':
                const allPokemons = state.allPokemons
                const filterType= action.payload === 'all'? allPokemons
                : allPokemons.filter((p) =>
                { 
                  
                 if(Array.isArray(p.type))  {
                   let tipologia1=p.type.map((t)=>t)
                  return tipologia1.includes(action.payload.charAt(0).toUpperCase()+  action.payload.slice(1)+' ');
                 }

                if(Array.isArray(p.types)) {
                 let tipologia= p.types.map((t) => t.name)
                  return tipologia.includes(action.payload)}
                  return true
              }
              )
                return{
                     ...state,
                     pokemons: filterType
                };


        case "DELETE_POKEMON":
          return { 
            ...state 
          };

       
        default:
            return{...state}
    }
};
export default rootReducer;
