import React from 'react';
import style from '../styles/btnDelete.module.css'
function btnDelete({handleDelete, id}) {
  return (
  
    <div className={style.cointainer}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div className={style.div} onClick={() =>handleDelete(id)}>Borrar</div>
</div>
  )
}

export default btnDelete