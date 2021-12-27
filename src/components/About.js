import React from 'react';
import photo from '../images/capricorn.jpg';

export default function About() {

    return (
        <div className='about' id='about'>
            <h2 className='about-me'>About Me</h2>
            <div className='about-img'>
            <img src={photo} alt='capricorn-goat' className='abt-img' />
            </div>
            
            <p className='skills-paras'>Javascript, HTML, CSS, NodeJS, React, Redux, Phython, SQL</p>

            <p className='abt-paras'>
                I am a student at Bloom Technology and Institute currently fulfilling my dream as a fullstack developer. I started coding in 2005 in which I never took very serious. So here I am, 17 years later, doing something that I absolutely enjoy all whilst making others lives easier. 
            </p>
            

            

            
    </div>
    )
}