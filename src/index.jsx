import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

import { ParallaxProvider } from 'react-scroll-parallax';

import './styles/global.module.scss';

ReactDOM.render(

  <ParallaxProvider scrollAxis={'horizontal'}>
    <Main />
  </ParallaxProvider>
 ,
  document.getElementById('root')
);