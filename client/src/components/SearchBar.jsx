import React from 'react';
import { useState, useSelector } from "react";
import{useDispatch} from 'react-redux';
import {getNamePokemons} from '../actions/index';

import style from './styles/searchBar.module.css';
import PikaBusca from "./Img&Gif/Pika.png";

const SearchBar = ({ setInput, setCurrentPage, setSelected,allPokemons }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  //const pokes = useSelector((state)=>state.pokemons)

  
  const handleInput = (e) => {//setea el estado con el valor del usuario.
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = (e) => {//se despacha accion cuando se da click
    if (name !== "" ) {
      dispatch(getNamePokemons(name)).then((info) => {
        setInput(1);
        setCurrentPage(1);
      });
      setName("");
      setSelected(true);
    }else{
      alert('Disculpe, Pokemon no encontrado');
      setName("")
    }
    // else if(allPokemons.length===0){
    //   alert('Disculpe, Pokemon no encontrado');
    //   setName("")
    // }
  };
  const handlerKeyEnter = (e) => {//se despacha accion cuando se da Enter
    if (e.keyCode === 13) {
      if (name !== "") {
        dispatch(getNamePokemons(name)).then((info) => {
          setInput(1);
          setCurrentPage(1);
        });
        setName("");
        setSelected(true);
      }
    }
  };

  return (
    <div>
      <div className={style.searchBar}>
        <input
          className={style.input}
          required
          type="text"
          placeholder="Buscar..."
          value={name}//para setear a como este el estado
          onKeyDown={(e) => handlerKeyEnter (e)}
          onChange={(e) => handleInput(e)}
        />
        <button
          className={style.button}
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          <img src={PikaBusca} className={style.img} alt="not found"  />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;