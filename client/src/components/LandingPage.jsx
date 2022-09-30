import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import styles from "../components/styles/landingPage.module.css";
import pokeBall from '../components/Img&Gif/pokeball.png';
import logo from '../components/Img&Gif/Logo.png';
import gif from '../components/Img&Gif/Hand.gif';
import linkedIn from "../components/Img&Gif/Icono_LinkedIn.png";
import github from "../components/Img&Gif/Icon_github.png";




const LandingPage = () => {

  function loging(){
    let imagen= logo
  
    setTimeout( function(){
      return imagen
    },3000)
  };
  
  useEffect(()=>loging)
 


  return (
    <div className={styles.BG}>
      <div className={styles.logoContainer}>
       
        <img className={styles.logoLanding} src={logo} alt="Pokeimage not found" />
        <Link className={styles.Link} to={'/home'}>
        <img  className={styles.pokeBola} src={pokeBall} alt="Pokeimage not found" />
        </Link>
        <img className={styles.hand} src={gif} alt='gif'/> 
      </div>
 
      
      <div className={styles.personalInfo}>
        <h2 className={styles.byMV}>Matías Vega</h2>
        <a href="https://www.linkedin.com/in/mat%C3%ADas-vega-98a527239/   "target="_blank" rel="noreferrer">
          <img className={styles.icons} src={linkedIn} alt="Not-found" />
        </a>
        <a href="https://github.com/ElMatiVega" target="_blank" rel="noreferrer">
          <img className={styles.icons} src={github} alt="Not-found" />
        </a>
      </div>
      
    </div>
  );
};


export default LandingPage
