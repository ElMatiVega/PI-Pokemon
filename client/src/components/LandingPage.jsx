import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <div className=''>
      <h1>Bienvenidos a PokePagina</h1>
      <Link to='/home' >
          <button className=''>Vamos</button>
      </Link>
    </div>
  )
}

export default LandingPage
