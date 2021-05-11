import React, { useState } from 'react';
import styles from '../styles/components/NavBar.module.scss';
import imgNav from '../assets/logoNavBar.png';

export default function NavBar() {
    const [menuPressed, setMenu] = useState(false)

    function menuToggle() {
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const menuHamburger = document.getElementById('menu')
        const imgMenu = document.getElementById('img');

        if(!menuPressed){
            imgMenu!.style.opacity='0';
            imgMenu!.style.transitionDelay='500ms';
            menuHamburger!.style.right='0px'
            menuHamburger!.style.transitionDuration='700ms'
            bar1!.style.transform = 'rotate(45deg) translateY(12px) translateX(5px)';
            bar2!.style.opacity='0';
            bar3!.style.transform = 'rotate(-45deg) translateY(-12px) translateX(5px)';
            setMenu(true);
        } else {
            imgMenu!.style.opacity='1';
            imgMenu!.style.transitionDelay='300ms'
            menuHamburger!.style.right='-1920px'
            menuHamburger!.style.transitionDuration='700ms'
            bar1!.style.transform = 'rotate(0)';
            bar2!.style.opacity='1';
            bar3!.style.transform = 'rotate(0)';
            setMenu(false);
        }
    }

    return(
        <div className={styles.container}>
            <nav>
                <div className={styles.underLine}>
                    <img src={imgNav} alt="Logo Encantos do Jalapão" />
                    <div className={styles.menuHamburger} onClick={() => menuToggle()}>
                        <span id="bar1"></span>
                        <span id="bar2"></span>
                        <span id="bar3"></span>
                    </div>
                </div>
                <div className={styles.subLine}>
                    <span>Jalapão</span>
                    <span>Mateiros</span>
                    <span>Sedematur</span>
                    <span>O que fazer?</span>
                    <span>Contatos</span>
                </div>  
            </nav>
        </div>
    )
}