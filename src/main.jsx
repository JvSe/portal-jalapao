import React from 'react';
import MainPages from './page/MainPages';
import NavBar from './components/NavBar';
import MouseScroll from './components/MouseScroll';

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