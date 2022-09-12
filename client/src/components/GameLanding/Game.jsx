import React from 'react';
import game from '../GameLanding/Game.module.css'

function Game() {

        let chk1= document.querySelector('#chk1');
        let chk2= document.querySelector('#chk2');
        let chk3= document.querySelector('#chk3');
        let reset= document.querySelector('.reset')

        chk1.onclick=function(){
            if(chk1.checked ===true){
                chk1.disable='true'
            }
        }
        chk1.onclick=function(){
            if(chk1.checked ===true){
                chk1.disable='true'
            }
        }
        chk2.onclick=function(){
            if(chk2.checked ===true){
                chk2.disable='true'
            }
        }
        chk3.onclick=function(){
            if(chk3.checked ===true){
                chk3.disable='true'
            }
        }

        reset.onclick=function(){
            chk1.checked = false;
            chk1.disable=false;

            chk2.checked = false;
            chk2.disable=false;

            chk3.checked = false;
            chk3.disable=false;
        }
   

  return (
    <div>
       <h2>Dale al Boton!!</h2>
    <div className={`${game.box}`}>
        <label>
            <input type="checkbox" className={`${game.checkbox}`} id="chk1"/>
            <i></i>
        </label>
        <label>
            <input type="checkbox" className={`${game.checkbox}`} id="chk2"/>
            <i></i>
        </label>
        <label>
            <input type="checkbox" className={`${game.checkbox}`} id="chk3"/>
            <i></i>
        </label>
    </div>
    <button className={`${game.reset}`}>Reset Game</button>
    
    </div>
  )
}

export default Game
