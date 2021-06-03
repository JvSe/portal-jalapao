import React, { useEffect, useState } from 'react';
import MouseScroll from '../components/MouseScroll';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/pages/Home.module.scss';

import InstagramEmbed from 'react-instagram-embed';
import axios from 'axios';

function Home() {
  const [urlPhoto, setUrl] = useState();
  
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
      
      <InstagramEmbed
        url='https://www.instagram.com/sedematur/'
        clientAccessToken='307904560792954|2b1e86db57a7eedbbfeb044c250578ff'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      
      <div className={styles.effectScroll}>
        <MouseScroll />
      </div>
    </div>
  );
}

export default Home;