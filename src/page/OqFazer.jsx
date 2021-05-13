import React from 'react';
import styles from '../styles/pages/OqFazer.module.scss';
import { Parallax } from 'react-scroll-parallax';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';

const imgs = [
    {}
]
export default function OqqFazer() {
    SwiperCore.use([EffectCoverflow]);

    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>

            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>

            <div className={styles.rectLeftText}>
                <h1>O que fazer?</h1>
                <div className={styles.containerTextLeft}>
                    <Swiper effect="coverflow">
                        {[1, 2, 3].map((i, el) => {
                            return <SwiperSlide>Slide {el}</SwiperSlide>;
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}