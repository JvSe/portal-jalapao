import React from 'react';
import PageTemplate from '../components/PageTemplate';
import amarelo from '../assets/amarelo.png';
import SlideShow from '../components/SlideShow';
import styles from '../styles/pages/OqFazer.module.scss';

export default function OqFazer() {
    
    return(
        <PageTemplate 
            img={amarelo}
            fixed
            color={'#F2DC6D'}
            title={'O que fazer?'}
        >
            <div className={styles.container}>
                <div style={{backgroundColor:'#fff', width:'100%', height:'100%'}}/>
            </div>
        </PageTemplate>
    )
}