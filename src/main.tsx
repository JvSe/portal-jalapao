import React from 'react';
import MainPages from './page/MainPages';
import NavBar from './components/NavBar';

export default function Main() {
    return(
        <>
            <div style={{position:'absolute', width:'100%'}}>
                <NavBar />
            </div>
            <MainPages />
        </>
    )
}