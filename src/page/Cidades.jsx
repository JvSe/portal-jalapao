import React from 'react';
import azul from '../assets/azul.png';
import PageTemplate from '../components/PageTemplate';

export default function Mateiros() {

    const listCities = [
        {
            name: 'Mateiros',
            text: `
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
        },
        {
            name: '[Nome Cidade]',
            text: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim tortor. A lacus vestibulum sed arcu non odio euismod lacinia at. Praesent semper feugiat nibh sed pulvinar proin. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Amet mauris commodo quis imperdiet massa tincidunt. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Adipiscing diam donec adipiscing tristique risus. Pharetra vel turpis nunc eget lorem dolor. Sed viverra ipsum nunc aliquet bibendum enim. Volutpat diam ut venenatis tellus. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Mattis aliquam faucibus purus in massa tempor. Libero volutpat sed cras ornare arcu dui.

            Posuere ac ut consequat semper viverra nam libero justo laoreet. Faucibus turpis in eu mi bibendum neque egestas. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Id leo in vitae turpis massa sed elementum. Etiam erat velit scelerisque in dictum. Amet mattis vulputate enim nulla. Egestas sed tempus urna et pharetra. Malesuada pellentesque elit eget gravida. Sit amet consectetur adipiscing elit pellentesque. Sed nisi lacus sed viverra tellus in hac.
            `
        },
        {
            name: '[Nome Cidade]',
            text: `
                O Município de Mateiros está localizado na Região do Jalapão, 
                e possui paisagens exuberantes em seu território. Lugares que 
                encantam como nenhum outro, que fascinam pela beleza natural, 
                cores vivas que chamam atenção dos visitantes que buscam por aventura. 
        
                <br /><br />
                
                Os locais que ficam nos recônditos do cerrado tocantinense 
                fazem parte de um terreno frágil, arenoso, mas muito procurado 
                por pessoas de todo o mundo, que quanto mais descobrem segredos 
                incríveis da natureza, mais buscam pela paz que ela transmite. 

                <br/><br />

                easkdjalksdjlakejdlkajsdlkjadlkajsd
                adkljaslkdjaslkdjalskdjlaskjdas
                dalsdjalskjdlaksdjlkasjdalksjdlkasjdlakd
                alçvkjfspodijclakjdçlakdas
                daksjdalkjdalk
            `
        },
    ]; 
    return(
        <PageTemplate 
            img={azul}
            color={'#0093C1'}
            title={'Cidades'}
            listCities={listCities}
        />
    )
}