import React from 'react';
import styles from '../styles/pages/Sedematur.module.scss';
import MouseScroll from '../components/MouseScroll';
import {  Parallax } from 'react-scroll-parallax';

export default function Sedematur() {
    return(
        <div className={styles.container}>
            <div className={styles.rectTotal}/>
            
            <Parallax className={styles.parallaxRect} x={[-20, 20]}>
                <div className={styles.rectLeft} />
            </Parallax>

            <div className={styles.rectLeftText}>
                <h1>Sedematur</h1>
                <div className={styles.containerTextLeft}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus libero eu ligula consequat vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non finibus eros, eu commodo metus. Donec ac lobortis nisl. Maecenas urna ex, sollicitudin at efficitur ac, suscipit nec enim. Quisque lacinia tortor sit amet tellus dictum, ac consequat est aliquet. Phasellus id felis elit. Ut vestibulum pharetra felis, eu rhoncus risus volutpat quis. Aliquam tincidunt massa vestibulum dapibus imperdiet. Donec sed risus vel nulla fringilla blandit. Quisque semper consectetur molestie. Vestibulum eu facilisis libero. Nullam egestas lectus ligula, nec accumsan ex eleifend eu. Sed id consectetur tellus.
                        <br/><br/>
                        Nam scelerisque, nisi ut tincidunt luctus, quam urna faucibus sem, in dignissim augue purus at nisl. Fusce mi purus, imperdiet sit amet est et, volutpat sollicitudin sem. In nec velit pretium, placerat neque quis, vehicula tortor. Praesent condimentum erat in massa consectetur scelerisque. Mauris viverra posuere odio, nec tempus risus convallis nec. Duis varius metus euismod nulla lacinia pretium at nec nisi. In eget porttitor turpis, eu lacinia mi. Praesent at nisi ac massa pulvinar convallis at eget dui. Vestibulum non quam dui.
                        <br/><br/>
                        Fusce ac ipsum a erat accumsan gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero ante, convallis vitae quam sed, tempus hendrerit nisl. Pellentesque consectetur interdum eros at mattis. Suspendisse potenti. Suspendisse nec dui dignissim, sollicitudin leo id, fermentum velit. Proin velit mauris, sodales pretium rhoncus vitae, feugiat at nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean et diam vel turpis facilisis dignissim. Nulla congue, lorem sed fringilla lacinia, massa erat accumsan nisl, vitae suscipit est erat ac nisl.
                        <br/><br/>
                        Integer et magna posuere, ornare neque ac, sagittis justo. In diam magna, finibus sed mi quis, varius cursus diam. Aliquam ullamcorper tempor ipsum. Donec condimentum gravida malesuada. Sed ut sagittis dui. Curabitur scelerisque sodales lacus, ac posuere ante ultricies tincidunt. Praesent vel eleifend nisl, et pulvinar felis. Quisque sodales placerat est quis tincidunt. Nunc ut diam id nisl lacinia volutpat id sed neque. Phasellus consectetur mollis odio et fringilla.
                        <br/><br/>
                        Aliquam diam orci, mattis at dignissim ut, eleifend ac sapien. Duis eleifend in diam ut viverra. Nullam sed diam id quam commodo gravida et ut erat. Donec velit nibh, pharetra at convallis sit amet, aliquet id justo. Vivamus quam tortor, aliquam sit amet mauris non, tincidunt vehicula eros. Duis gravida augue ex, sed rhoncus ante placerat quis. Quisque gravida congue ex, id ullamcorper ante sodales nec. Donec gravida risus vitae nulla rhoncus molestie. Maecenas a urna imperdiet ipsum mollis elementum. Maecenas et efficitur tellus. Fusce gravida lectus eget dolor dignissim egestas. Fusce vitae ultricies nunc, et blandit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    </p>
                </div>
            </div>
        </div>
    )
}