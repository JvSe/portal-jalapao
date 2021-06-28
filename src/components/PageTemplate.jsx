import React from 'react';
import styles from '../styles/components/PageTemplate.module.scss';
import { Parallax } from 'react-scroll-parallax';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';


export default function PageTemplate(props) {
    
    return(
        <>
            { props.title !== 'Cidades' ?
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
                            <div id="containerText" className={styles.containerTextLeft}>
            
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
                :
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
                            <div id="containerText" className={styles.containerTextLeft}>
            
                            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                                {props.listCities.map((citie, index) => (
                                    <div className={styles.sliderContainer}>
                                        <h2 className={styles.textTitleH3}> {citie.name} </h2>
                                        <p 
                                            className={styles.text} 
                                            dangerouslySetInnerHTML={{__html:citie.text}}
                                        />
                                    </div>
                                ))
                                    
                                }
                            </AwesomeSlider>
                                
                                
                            </div>
                        </div>
                        
            
                    </div>
            }
        </>
    )
}