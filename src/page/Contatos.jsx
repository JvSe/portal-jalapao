import React from 'react';
import styles from '../styles/pages/Contatos.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import eu from '../assets/eu.jpeg'

export default function Contatos() {
    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>

            <div className={styles.rectLeftText}>
                <h1>Contato</h1>
                <div className={styles.containerTextLeft}>
                    <div className={styles.card}>
                        <img src={eu} alt="João Vitor Soares" />
                        <div className={styles.containerCardText}>
                            <h1>João Vitor Soares Egidio</h1>
                            <h2> Software Engineer, Web Designer, Web Developer</h2>
                        </div>
                        <div className={styles.containerCardContact}>
                            <div>
                                <FaPhoneAlt className={styles.iconCard}/>
                                <p>joaovitorsoares12@gmail.com</p>
                            </div>
                            <div>
                                <FaEnvelope className={styles.iconCard}/>
                                <p>(63) 98424-5890</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={eu} alt="João Vitor Soares" />
                        <div className={styles.containerCardText}>
                            <h1>João Vitor Soares Egidio</h1>
                            <h2> Software Engineer, Web Designer, Web Developer</h2>
                        </div>
                        <div className={styles.containerCardContact}>
                            <div>
                                <FaPhoneAlt className={styles.iconCard}/>
                                <p>joaovitorsoares12@gmail.com</p>
                            </div>
                            <div>
                                <FaEnvelope className={styles.iconCard}/>
                                <p>(63) 98424-5890</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={eu} alt="João Vitor Soares" />
                        <div className={styles.containerCardText}>
                            <h1>João Vitor Soares Egidio</h1>
                            <h2> Software Engineer, Web Designer, Web Developer</h2>
                        </div>
                        <div className={styles.containerCardContact}>
                            <div>
                                <FaPhoneAlt className={styles.iconCard}/>
                                <p>joaovitorsoares12@gmail.com</p>
                            </div>
                            <div>
                                <FaEnvelope className={styles.iconCard}/>
                                <p>(63) 98424-5890</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}