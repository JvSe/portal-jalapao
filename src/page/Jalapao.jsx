import React from 'react';
import PageTemplate from '../components/PageTemplate';
import amarelo from '../assets/amarelo.png';

export default function Jalapao() {
    const varText = `
        O nome Jalapão batiza uma extensa área de belezas naturais ao
        leste do estado de Tocantins, considerando principalmente, a
        estrutura receptiva dos municípios de Ponte Alta do Tocantins,
        Mateiros e São Felix do Tocantins, embora em extensão,
        abrange outros que integram o deslocamento de turistas.

        <br /> <br />
        
        A mesma nomenclatura batiza o Parque Estadual do Jalapão, uma
        unidade de conservação de proteção integral à natureza, que
        preserva uma extensa área de 158.970,96 hectares de pura natureza
        permeada por dunas e águas cristalinas, onde acontece uma
        grande concentração de turistas em busca dos cenários das Dunas
        do Jalapão e Cachoeira da Velha, principalmente, sem deixar de
        ressaltar tantos outros pontos visitados, além da desafiadora Trilha
        do Espírito Santo. Criado em 12 de janeiro de 2001, Jalapão é o
        maior parque estadual do Tocantins compreendendo os
        municípios de Ponte Alta, Mateiros e São Felix do Tocantins.
    `
    return(
        <PageTemplate 
            img={amarelo}
            fixed
            color={'#F2DC6D'}
            title={'Jalapão'}
            text={varText}
        />
    )
}