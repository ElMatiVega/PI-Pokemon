import React from 'react'
import style from './styles/btn2.module.css'
import { Link } from 'react-router-dom'
function btn2({handleSubmit}) {

  return (
    <div className={style.cointainer}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <Link className={style.Link} to='/home'>Volver</Link>
</div>
  )
}

export default btn2