import React from 'react';
import PageTemplate from '../components/PageTemplate';
import amarelo from '../assets/amarelo.png';
import SlideShow from '../components/SlideShow';
import styles from '../styles/pages/OqFazer.module.scss';

import dunas1 from '../assets/slide/dunas/1.jpg';
import dunas2 from '../assets/slide/dunas/2.jpeg';
import dunas3 from '../assets/slide/dunas/3.jpeg';
import dunas4 from '../assets/slide/dunas/4.jpeg';
import dunas5 from '../assets/slide/dunas/5.jpg';

import cachoeiraFormiga1 from '../assets/slide/cachoeiraFormiga/1.png';
import cachoeiraFormiga2 from '../assets/slide/cachoeiraFormiga/2.jpg';
import cachoeiraFormiga3 from '../assets/slide/cachoeiraFormiga/3.jpeg';
import cachoeiraFormiga4 from '../assets/slide/cachoeiraFormiga/4.jpeg';
import cachoeiraFormiga5 from '../assets/slide/cachoeiraFormiga/5.jpg';

import cachoeiraVelha1 from '../assets/slide/cachoeiraVelha/1.jpg';
import cachoeiraVelha2 from '../assets/slide/cachoeiraVelha/2.jpg';
import cachoeiraVelha3 from '../assets/slide/cachoeiraVelha/3.jpg';
import cachoeiraVelha4 from '../assets/slide/cachoeiraVelha/4.jpg';
import cachoeiraVelha5 from '../assets/slide/cachoeiraVelha/5.jpeg';

import fervedouro1 from '../assets/slide/fervedouro/1.jpg';
import fervedouro2 from '../assets/slide/fervedouro/2.jpg';
import fervedouro3 from '../assets/slide/fervedouro/3.jpg';
import fervedouro4 from '../assets/slide/fervedouro/4.jpg';
import fervedouro5 from '../assets/slide/fervedouro/5.jpg';

import pedraBaliza1 from '../assets/slide/pedra da baliza/1.jpg';
import pedraBaliza2 from '../assets/slide/pedra da baliza/2.jpg';
import pedraBaliza3 from '../assets/slide/pedra da baliza/3.jpg';

import quiombolas1 from '../assets/slide/quilombolas/1.jpg';
import quiombolas2 from '../assets/slide/quilombolas/2.jpg';
import quiombolas3 from '../assets/slide/quilombolas/3.jpg';

import rionovo1 from '../assets/slide/rionovo/1.jpg';
import rionovo2 from '../assets/slide/rionovo/2.jpg';
import rionovo3 from '../assets/slide/rionovo/3.jpg';

import serra1 from '../assets/slide/serra/1.jpg';
import serra2 from '../assets/slide/serra/2.jpg';
import serra3 from '../assets/slide/serra/3.jpg';

const textDunas = `
                    Principal cartão postal do Jalapão, as Dunas formam um dos maiores espetáculos naturais do país. Localizada entre os municípios de Ponte Alta e Mateiros é parada obrigatória para quem visita a região conhecida como Deserto do Jalapão, que se formou pela erosão das serras rochosas.
                    Em constante movimento as dunas do Jalapão e suas belezas são guiadas pelos ventos e quem as visitas garante ainda o espetáculo da Serra do Espírito Santo, a sua volta e de formação arenosa, cuja ação dos ventos causa sua erosão, originando as dunas.
                    O atrativo possui a formação de dunas em areias finas e avermelhadas que atingem aproximadamente 40 metros de altura. A paisagem também é composta por uma lagoa rodeada de brejos, buritis e riacho, situada no caminho que dá acesso, em meio à vegetação de cerrado. A preferência pelas subidas ocorre no fim do dia, quando a temperatura cai e a areia começa a esfriar. Do topo é possível ter uma visão panorâmica da região como as veredas típicas de cerrado e a Serra do Espírito do Santo que, juntamente com o pôr do sol, transforma o atrativo em um cenário singular propício à contemplação.
                `;

const textCachoeiraFormiga = `
                    O intenso verde esmeralda da água da Cachoeira do Formiga encanta os turistas que visitam o Jalapão. A cachoeira está entre as mais belas da região e, com toda certeza, entre as mais visitadas. A queda d’água não é muito grande, mas a piscina que se forma é maravilhosa. A água é tão transparente que permite ver o fundo de areia calcária. 
                    A cachoeira está localizada em Mateiros, a 24 km do centro da cidade, em propriedade particular e dentro dos limites do Parque Estadual do Jalapão - PEJ. A água é cristalina em tons verdes azulados na qual é possível banhar-se e observar o fundo do poço, com areias calcárias.
`

const textCachoeiraVelha = `
                            A cachoeira da Velha está localizada em Mateiros, a 121 km da sede urbana do município. A entrada para a cachoeira é realizada por meio de uma passarela de madeira com mirantes para a contemplação da paisagem. A potência dessa queda d'água oferece espetáculo grandioso para os turistas, que podem chegar bem perto seguindo pela plataforma de madeira construída especialmente para observação da paisagem. São 100 metros de largura e 15 metros de queda. Destaque para a árvore que cresce em meio à cachoeira, no paredão que separa as duas quedas. Os turistas que visitam o local apenas pela plataforma enxergam somente uma das quedas.
                            O banho nas quedas d’água com acesso pela plataforma não é permitido, até porque a força da água é muito grande. Para quem deseja chegar mais perto da cachoeira, vê-la por completo e curtir mais intensamente, o recomendado é fazer um rafting, que chega aos pés do véu que não pode ser visto da plataforma (e é o lado mais belo da cachoeira). A Cachoeira da Velha recebe as águas do Rio Novo, um dos maiores rios de água potável do mundo
                            O rafting na Cachoeira da Velha é emocionante e permite sentir a potência de suas águas bem de perto. As corredeiras têm nível três e quatro de dificuldade. Ótimas para aliar emoção com segurança. A descida demora por volta de quinze minutos e o final do passeio é na Prainha do Rio Novo, onde é possível curtir a calmaria e um banho de rio para relaxar.
`

const textFervedouros = `
                            Os fervedouros encantam pela beleza e águas cristalinas. Consiste em uma área de alagado com nascente de águas borbulhantes e claras, cercado de vegetação de cerrado com plantio de bananeiras. O poço de mergulho é por onde afloram águas em meio às areais finas. Gases submersos emergem das águas e impedem as pessoas de afundarem. Esse fenômeno é chamado de ressurgência da água. Existem vários em todo o Jalapão. 
                            O Fervedouro dos Buritis está localizado em Mateiros, a 19 km da sede do município, em área particular, e encanta pela linda cor da água, que varia entre verde e azul, a depender do sol, e também pelos grandiosos buritis que cercam o local. Com grau de flutuação leve e muito verde ao redor, esse fervedouro agrada pela grande piscina e transparência da água. 
                            Vale ressaltar que o atrativo possui também potencial de utilização pelos turistas para a contemplação da fauna e flora e para a realização de trilhas ecológicas.
                            Já o Fervedouro do Ceiça está localizado a 25 km de Mateiros e encontra-se em propriedade particular, dentro do Parque Estadual do Jalapão. O Fervedouro do Encontro pode não ser o maior ou mais bonito do Jalapão, mas certamente é o mais forte. A nascente desse fervedouro tem alta pressão e é muito difícil afundar mesmo com outra pessoa empurrando você para baixo. Com uma nascente única, esse fervedouro é o ideal para quem deseja sentir intensamente a flutuação tão famosa neste fenômeno raro da natureza. Para aliviar a sensação de areia por todos os lados, vale dar um mergulho no encontro entre o Rio Sono e o Rio Formiga. Aliás, é desse encontro que vem o nome do fervedouro. Os rios e o fervedouro estão a apenas dois minutos de caminhada um do outro.
                            Vale lembrar ainda do Fervedouro da Korubo (28 km da sede), Fervedouro da Mumbuca (36 km da sede), Fervedouro do Soninho, Fervedouro do Rio Sono (21 km da sede), Fervedouro do Buritizinho (30 km da sede), Fervedouro Recanto do Salto (22 km da sede).
`

const textPedraBaliza = ``

const mediasDunas = [
    {img:dunas1, nome:'Dunas do Jalapão'},
    {img:dunas2, nome:'Dunas do Jalapão'},
    {img:dunas3, nome:'Dunas do Jalapão'},
    {img:dunas4, nome:'Dunas do Jalapão'},
    {img:dunas5, nome:'Dunas do Jalapão'}, 
]

const mediasFormiga = [
    {img:cachoeiraFormiga1, nome:'Cachoeira da formiga'},
    {img:cachoeiraFormiga2, nome:'Cachoeira da formiga'},
    {img:cachoeiraFormiga3, nome:'Cachoeira da formiga'},
    {img:cachoeiraFormiga4, nome:'Cachoeira da formiga'},
    {img:cachoeiraFormiga5, nome:'Cachoeira da formiga'},
]

const mediasVelha = [
    {img:cachoeiraVelha1, nome:'Cachoeira da Velha'},
    {img:cachoeiraVelha2, nome:'Cachoeira da Velha'},
    {img:cachoeiraVelha3, nome:'Cachoeira da Velha'},
    {img:cachoeiraVelha4, nome:'Cachoeira da Velha'},
    {img:cachoeiraVelha5, nome:'Cachoeira da Velha'},
]

const mediasFervedouro = [
    {img:fervedouro1, nome:'Fervedouros'},
    {img:fervedouro2, nome:'Fervedouros'},
    {img:fervedouro3, nome:'Fervedouros'},
    {img:fervedouro4, nome:'Fervedouros'},
    {img:fervedouro5, nome:'Fervedouros'},
]

const mediasPedraBaliza = [
    {img:pedraBaliza1, nome:'Pedra da Baliza'},
    {img:pedraBaliza2, nome:'Pedra da Baliza'},
    {img:pedraBaliza3, nome:'Pedra da Baliza'},
]

const mediasQuilombolas= [
    {img:quiombolas1, nome:'Comunidade Mumbuca'},
    {img:quiombolas2, nome:'Comunidade Mumbuca'},
    {img:quiombolas3, nome:'Comunidade Mumbuca'},
]

const mediasRioNovo = [
    {img:rionovo1, nome:'Rio Novo'},
    {img:rionovo2, nome:'Rio Novo'},
    {img:rionovo3, nome:'Rio Novo'},
]

const mediasSerra = [
    {img:serra1, nome:'Serra do Espírito Santo'},
    {img:serra2, nome:'Serra do Espírito Santo'},
    {img:serra3, nome:'Serra do Espírito Santo'},
]

export default function OqFazer() {
    
    return(
        <PageTemplate 
            img={amarelo}
            fixed
            color={'#F2DC6D'}
            title={'O que fazer?'}
        >
            <div className={styles.container}>
                <SlideShow media={mediasDunas} />
                <SlideShow media={mediasFormiga} />
                <SlideShow media={mediasVelha} />
                <SlideShow media={mediasFervedouro} />
                <SlideShow media={mediasPedraBaliza} />
                <SlideShow media={mediasQuilombolas} />
                <SlideShow media={mediasRioNovo} />
                <SlideShow media={mediasSerra} />
            </div>
        </PageTemplate>
    )
}