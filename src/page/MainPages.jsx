import React from 'react';
import styles from '../styles/pages/Main.module.scss';
import Home from './Home';
import Jalapao from './Jalapao'
import Mateiros from './Mateiros'
import Sedematur from './Sedematur'
import OqFazer from './OqFazer'
import Contatos from './Contatos'

export default function MainPages() {
    
    return(
        <div className={styles.container}>
            <div id="home">
                <Home />
            </div>
            <div id="jalapao">
                <Jalapao />
            </div>
            <div id="mateiros">
                <Mateiros />
            </div>
            <div id="sedematur">
                <Sedematur />
            </div>
            <div id="oqfazer">
                <OqFazer />
            </div>
            <div id="contatos">
                <Contatos />
            </div>
        </div>
    )
}