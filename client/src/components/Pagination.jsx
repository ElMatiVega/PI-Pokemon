import React from 'react'
import next from './Img&Gif/next.jpg'
import previous from './Img&Gif/previus.jpg'
import style from './styles/pagination.module.css'

function Pagination({ input, setInput, currentPage, setCurrentPage, allPokemons}) {

    const nextPage = () => {
        setInput(parseInt(currentPage) + 1);
        setCurrentPage(parseInt(currentPage) + 1);
      };
    
      const previousPage = () => {
        setInput(parseInt(currentPage) - 1);
        setCurrentPage(parseInt(currentPage) - 1);
      };
    
      const onKeyDown = (e) => {
        if (e.keyCode === 13) {
          if (
            parseInt(e.target.value) < 1 ||
            parseInt(e.target.value) > allPokemons ||
            isNaN(parseInt(e.target.value))
          ) {
            setCurrentPage(1);
            setInput(1);
          } else {
            setCurrentPage(parseInt(e.target.value));
          }
        }
      };
    
      const onChange = (e) => {
        setInput(e.target.value);
      };
    
      return (
        <div className={style.container}>
          <br />
          <button className={style.buttons} disabled={currentPage <= 1} onClick={previousPage}>
            <img className={style.imgPagination} src={previous} alt="not found" />
          </button>
          <input
            className={style.inputPag}
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            name="currentPage"
            autoComplete="off"
            value={input}
          />
          <p className={style.text}> de {allPokemons} </p>
          <button className={style.buttons} disabled={currentPage >= allPokemons} onClick={nextPage}>
            <img className={style.imgPagination} src={next} alt="not found" />
          </button>
        </div>    
  )
}

export default Pagination
