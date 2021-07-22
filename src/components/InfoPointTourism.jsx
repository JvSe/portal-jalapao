import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';

import img1 from '../assets/imgs/1.png';
import img2 from '../assets/imgs/2.png';
import img3 from '../assets/imgs/3.png';


import "../styles/components/InfoPointTourism.scss";

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';


SwiperCore.use([EffectCoverflow]);

const InfoPointTourism = props => {
    return (
        <div className="temporario centerTotal" style={{animationName:props.animation}}>
            <div className="containerModal centerTotal flex-col">
                <div className="centerTotal containerClose">
                    {props.children}
                </div>
                <div className="containerTexts centerTotal flex-col">
                    <h1>Dunas do Jalapão</h1>
                    <div className="textDescricao">
                        <p style={{textOverflow:'ellipsis'}}>
                            Principal cartão postal do Jalapão, as Dunas formam 
                            um dos maiores espetáculos naturais do país. Localizada 
                            entre os municípios de Ponte Alta e Mateiros é parada 
                            obrigatória para quem visita a região conhecida como 
                            Deserto do Jalapão, que se formou pela erosão das 
                            serras rochosas. Em constante movimento as dunas do 
                            Jalapão e suas belezas são guiadas pelos ventos e quem
                            as visitas garante ainda o espetáculo da Serra do 
                            Espírito Santo, a sua volta e de formação arenosa, 
                            cuja ação dos ventos causa sua erosão, originando as dunas.
                            O atrativo possui a formação de dunas em areias finas 
                            e avermelhadas que atingem aproximadamente 40 metros 
                            de altura. A paisagem também é composta por uma lagoa 
                            rodeada de brejos, buritis e riacho, situada no caminho 
                            que dá acesso, em meio à vegetação de cerrado. A preferência 
                            pelas subidas ocorre no fim do dia, quando a temperatura 
                            cai e a areia começa a esfriar. Do topo é possível ter uma 
                            visão panorâmica da região como as veredas típicas de cerrado 
                            e a Serra do Espírito do Santo que, juntamente com o pôr do 
                            sol, transforma o atrativo em um cenário singular propício à 
                            contemplação.
                        </p>
                    </div>
                    
                </div>

                <div className="containerImgs">
                <Swiper
                    effect="coverflow"
                    slidesPerView={'auto'}
                    navigation
                    grabCursor
                    centeredSlides
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop
                    coverflowEffect={{
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:1,
                    }}
                    
                >
                   {[img1, img2, img3].map((i, el) => {
                        return <SwiperSlide key={el} ><img src={i} alt="eaeee" /></SwiperSlide>;
                    })}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default InfoPointTourism;