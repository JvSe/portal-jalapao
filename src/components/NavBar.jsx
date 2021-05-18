import React, { useState } from 'react';
import styles from '../styles/components/NavBar.module.scss';
import imgNav from '../assets/logoNavBar.png';

export default function NavBar() {
    const [menuPressed, setMenu] = useState(false);


    const menuToggle = (valor) => {
        
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const menuHamburger = document.getElementById('menu')
        const imgMenu = document.getElementById('img');

        if(!menuPressed){
            imgMenu.style.opacity='0';
            imgMenu.style.transitionDelay='500ms';
            menuHamburger.style.right='0px'
            menuHamburger.style.transitionDuration='700ms'
            bar1.style.transform = 'rotate(45deg) translateY(12px) translateX(5px)';
            bar2.style.opacity='0';
            bar3.style.transform = 'rotate(-45deg) translateY(-12px) translateX(5px)';
            setMenu(true);
        } else {
            imgMenu.style.opacity='1';
            imgMenu.style.transitionDelay='300ms'
            menuHamburger.style.right='-1920px'
            menuHamburger.style.transitionDuration='700ms'
            bar1.style.transform = 'rotate(0)';
            bar2.style.opacity='1';
            bar3.style.transform = 'rotate(0)';
            setMenu(false);
        }
        
        
    }

    return(
        <div className={styles.container}>
            <nav>
                <div className={styles.underLine}>
                    <a className={styles.img} href="#home"><img id={"img"} src={imgNav} alt="Logo Encantos do Jalapão" /></a>
                    
                    <div className={styles.menuHamburger} onClick={() => menuToggle()}>
                        <span id="bar1"></span>
                        <span id="bar2"></span>
                        <span id="bar3"></span>
                    </div>
                </div>
                <div className={styles.subLine}>
                    <a href="#jalapao" > Jalapão </a>
                    <a href="#mateiros"> Mateiros</a>
                    <a href="#sedematur" > Sedematur </a>
                    <a href="#oqfazer" > O que fazer? </a>
                    <a href="#contatos" > Contatos </a>
                </div>  
            </nav>

            <div id="menu" className={styles.containerMenuHamburger}>
                <div>
                    <a onClick={menuToggle} href="#jalapao"> Jalapão </a>
                    <a onClick={menuToggle} href="#mateiros"> Mateiros</a>
                    <a onClick={menuToggle} href="#sedematur"> Sedematur </a>
                    <a onClick={menuToggle} href="#oqfazer"> O que fazer? </a>
                    <a onClick={menuToggle} href="#contatos"> Contatos </a>
                </div>
                
            </div>
        </div>
    )
}