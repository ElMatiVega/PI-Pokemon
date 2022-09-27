import React from 'react'
import style from './styles/btn1.module.css'
function btn1({handleSubmit}) {

  return (
    <div className={style.cointainer}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div onClick={handleSubmit}>Crear</div>
</div>
  )
}

export default btn1

