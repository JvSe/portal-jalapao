import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/components/SlideShow.module.scss';

export default function SlideShow( props ) {
    return(
        <SimpleReactLightbox>
            <SRLWrapper>
                {props.media.map((item, index) => (
                    <a key={index} href={item.img} className={styles.containerLink} >
                        <div className={styles.container}>
                            <img src={item.img} alt={item.nome} style={{width:'100%'}} className={styles.imgContainer} />
                            <p className={styles.textoName}>{item.nome}</p>
                        </div>
                    </a>
                ))}
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}