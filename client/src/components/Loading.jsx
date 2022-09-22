import React from 'react';
import fueguitoLoading from './Img&Gif/fueguito.gif';
import styles from "../components/styles/loading.module.css";
import logo from '../components/Img&Gif/Logo.png';


function Loading() {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.logoContainer}>
           <img className={styles.logoLanding} src={logo} alt="Pokeimage not found" />
       </div>
        <div className={styles.loading}>
            <img className={styles.image}
              src={fueguitoLoading}
              alt="Pokeimage not found"
              />
            <h2 className={styles.loadingText}> Loading... </h2>
          </div>
    </div>
  )
}

export default Loading