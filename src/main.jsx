import React from 'react';
import MainPages from './page/MainPages';
import NavBar from './components/NavBar';

export default function Main() {
    return(
        <>
            <div style={{position:'fixed', width:'100%', zIndex:100000}}>
                <NavBar />
            </div>
            <MainPages />
        </>
    )
}