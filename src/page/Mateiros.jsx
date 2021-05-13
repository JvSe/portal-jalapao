import React from 'react';
import styles from '../styles/pages/Mateiros.module.scss';
import { Parallax } from 'react-scroll-parallax'

export default function Mateiros() {
    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>
            
            <div className={styles.rectLeftText}>
                <h1>Mateiros</h1>
                <div className={styles.containerTextLeft}>
                    <p className={styles.text}>
                    O Município de Mateiros está localizado na Região do Jalapão, 
                    e possui paisagens exuberantes em seu território. Lugares que 
                    encantam como nenhum outro, que fascinam pela beleza natural, 
                    cores vivas que chamam atenção dos visitantes que buscam por aventura. 

                    <br /><br />
                    
                    Os locais que ficam nos recônditos do cerrado tocantinense 
                    fazem parte de um terreno frágil, arenoso, mas muito procurado 
                    por pessoas de todo o mundo, que quanto mais descobrem segredos 
                    incríveis da natureza, mais buscam pela paz que ela transmite. 
                    </p>
                </div>
            </div>
        </div>
    )
}