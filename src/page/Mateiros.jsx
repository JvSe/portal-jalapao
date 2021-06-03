import React from 'react';
import azul from '../assets/azul.png';
import PageTemplate from '../components/PageTemplate';

export default function Mateiros() {
    const varText = `
        O Município de Mateiros está localizado na Região do Jalapão, 
        e possui paisagens exuberantes em seu território. Lugares que 
        encantam como nenhum outro, que fascinam pela beleza natural, 
        cores vivas que chamam atenção dos visitantes que buscam por aventura. 

        <br /><br />
        
        Os locais que ficam nos recônditos do cerrado tocantinense 
        fazem parte de um terreno frágil, arenoso, mas muito procurado 
        por pessoas de todo o mundo, que quanto mais descobrem segredos 
        incríveis da natureza, mais buscam pela paz que ela transmite. 
    `
    return(
        <PageTemplate 
            img={azul}
            color={'#0093C1'}
            title={'Mateiros'}
            text={varText}
        />
    )
}