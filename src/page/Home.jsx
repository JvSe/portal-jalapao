import React from 'react';
import MouseScroll from '../components/MouseScroll';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/pages/Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.rectTotal}/>
      
      <div className={styles.rectLeft} />

      <Parallax y={[-30, 30]}>

        <div className={styles.parallaxText}>
          <h1>Jalapão</h1>
          <p>Uma vida tão rara</p>
        </div>
        
      </Parallax>
      

      <div className={styles.effectScroll}>
        <MouseScroll />
      </div>
    </div>
  );
}

export default Home;