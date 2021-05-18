import React, { useState } from 'react';
import styles from '../styles/components/PageTemplate.module.scss';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal'
export default function PageTemplate(props) {
   
    var tela = window.outerWidth;
    
    return(
        <div 
            className={styles.container}
            style={{
                background: props.fixed === true ? 
                                `url(${props.img}) no-repeat center center fixed` :
                                `url(${props.img}) no-repeat center center`,
                
            }}
        >
            <div 
                className={styles.rectTotal}
                style={{
                    backgroundColor:props.color
                }}
            />

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div 
                    className={styles.rectLeft} 
                    style={{
                        backgroundColor:props.color
                    }}    
                />
            </Parallax>
                
            <div className={styles.rectLeftText}>
                <h1 className={styles.textTitle}>{props.title}</h1>
                <div className={styles.containerTextLeft}>

                    {props.children ? 
                        props.children :
                        <p 
                            className={styles.text} 
                            dangerouslySetInnerHTML={{__html:props.text}}
                        />
                    }
                    
                </div>
            </div>
            

        </div>
    )
}