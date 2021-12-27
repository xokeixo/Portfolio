import React from 'react';

export default function Nav(){
    
    return(
        <div className='nav'>
            {/* image header goes here */}
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}