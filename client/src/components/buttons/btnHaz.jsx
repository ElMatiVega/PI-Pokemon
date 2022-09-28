import React from 'react'
import style from '../styles/btnHaz.module.css'
import { Link } from 'react-router-dom'
function btn2({handleSubmit}) {

  return (
    <div className={style.cointainer}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <Link to='/PokeCreate'className={style.Link}>Haz tu Poke</Link>
</div>
  )
}

export default btn2