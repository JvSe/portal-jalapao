import React from 'react';
import PageTemplate from '../components/PageTemplate';
import verde from '../assets/verde.png';

export default function Sedematur() {
    const varText = `
        Adicionar texto aqui
    `

    return(
        <PageTemplate 
            img={verde}
            fixed
            color={'#014011'}
            title={'Sedematur'}
            text={varText}
        />
    )
}