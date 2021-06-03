import React from 'react';
import styles from '../styles/pages/Contatos.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import sedematur from '../assets/logoSedematur.png'



export default function Contatos() {
    
    const openChat = () => {
        window.open('https://api.whatsapp.com/send?phone=5563992944578')
    }
    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>

            <div className={styles.rectLeftText}>
                <h1 className={styles.textTitle}>Contato</h1>
                <div className={styles.containerTextLeft}>
                    <div className={styles.card} onClick={openChat}>
                        <img src={sedematur} alt="Sedematur" />
                        <div className={styles.containerCardText}>
                            <h1>Sedematur</h1>
                            <h2> Secretaria de Turismo e Meio Ambiente de Mateiros no Jalapão, Tocantins.</h2>
                        </div>
                        <div className={styles.containerCardContact}>
                            <div>
                                <FaPhoneAlt className={styles.iconCard} size={'1.3rem'}/>
                                <p>sedematur@gmail.com</p>
                            </div>
                            <div>
                                <FaEnvelope className={styles.iconCard} size={'1.3rem'}/>
                                <p>(63) 99294-4578</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}