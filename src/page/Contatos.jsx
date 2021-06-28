import React from 'react';
import styles from '../styles/pages/Contatos.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { FaPhoneAlt, FaEnvelope, FaRegImages } from "react-icons/fa";


import sedematur from '../assets/logoSedematur.png'

const listSec = [
    {
        img:sedematur,
        nome:'Sedematur',
        title:'Secretaria de Turismo e Meio Ambiente de Mateiros no Jalapão, Tocantins.',
        whats:'https://api.whatsapp.com/send?phone=5563992944578',
        email:'sedematur@gmail.com',
        telefone:'(63) 99294-4578'
    },
    {
        img:FaRegImages,
        nome:'[Nome Secretaria]',
        title:'[Descrição Secretaria]',
        whats:null,
        email:'[Email secretaria]',
        telefone:'[Número secretaria]'
    },
    {
        img:FaRegImages,
        nome:'[Nome Secretaria]',
        title:'[Descrição Secretaria]',
        whats:null,
        email:'[Email secretaria]',
        telefone:'[Número secretaria]'
    },
]

export default function Contatos() {
    
    const openChat = () => {
        window.open('https://api.whatsapp.com/send?phone=5563992944578')
    }

    const Card = props => (
        <div className={styles.card} onClick={()=>window.open(props.object.whats)}>
            <img src={props.object.img} alt={"Foto da secretaria"} />
            <div className={styles.containerCardText}>
                <h1>{props.object.nome}</h1>
                <h2> {props.object.title}</h2>
            </div>
            <div className={styles.containerCardContact}>
                <div>
                    <FaPhoneAlt className={styles.iconCard} size={'1.3rem'}/>
                    <p>{props.object.email}</p>
                </div>
                <div>
                    <FaEnvelope className={styles.iconCard} size={'1.3rem'}/>
                    <p>{props.object.telefone}</p>
                </div>
                
            </div>
        </div>
    )

    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>

            <div className={styles.rectLeftText}>
                <h1 className={styles.textTitle}>Contato</h1>
                <div className={styles.containerTextLeft}>
                    {
                        listSec.map((sec, index) => (
                            <Card object={sec} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}