import React from 'react';
import pikaLanding from './Img&Gif/pikachuGif.gif';
import styles from "../components/styles/loading.module.css";


function Loading() {
  return (
    <div className={styles.loadingContainer}>
    <div className={styles.loading}>
      <img
        src={pikaLanding}
        alt="Pokeimage not found"
        width="120px"
        height="120px"
      />
      <h2 className={styles.loadingText}> Loading... </h2>
    </div>
  </div>
  )
}

export default Loading