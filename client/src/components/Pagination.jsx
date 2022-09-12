import React from 'react'

function Pagination({PokesForPage, allPokemons, pagination}) {
const pageNumbers=[];
for(let i=0; i<=Math.ceil(allPokemons/PokesForPage)-1; i++){
    pageNumbers.push(i+1)//para que la pagina arranque en 1.
}

  return (
    <nav >
        <ul className="paginado">
            {pageNumbers && pageNumbers.map(number =>(
                <button className='btnNum' key={number}>
                    <a  onClick={()=> pagination(number)}>{number}</a>
                </button>

            ))}
        </ul>
    </nav>
    
  )
}

export default Pagination
