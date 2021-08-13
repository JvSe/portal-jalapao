import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';

import img1 from '../assets/imgs/1.png';
import img2 from '../assets/imgs/2.png';
import img3 from '../assets/imgs/3.png';


import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';


SwiperCore.use([EffectCoverflow]);

const InfoPointTourism = props => {
    return (
        <div className="centerTotal containerTotalModal" style={{animationName:props.animation}}>
            <div className="containerModal centerTotal flex-col">
                <div className="centerTotal containerClose">
                    {props.children}
                </div>
                <div className="containerTexts centerTotal flex-col">
                    <h1>{props.point.name}</h1>
                    <div className="textDescricao">
                        <p style={{textOverflow:'ellipsis'}}>
                            {props.point.descricao}
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