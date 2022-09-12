import React from 'react';
import {Link} from 'react-router-dom';
//import Game from './GameLanding/Game'

function LandingPage() {
  return (
    <div className=''>
      <h1>Bienvenidos a la PokePagina</h1>
    {/* hacer pokeJuego, probar un renderizado ternario para poder mostrar distintos componentes. */}

      {/* <Game/> */}

      <Link to='/home' >
          <button className=''>Vamos</button>
      </Link>
    </div>
  )
}

export default LandingPage
