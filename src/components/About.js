import React from 'react';
import photo from '../images/capricorn.jpg';

export default function About() {

    return (
        <div className='about' id='about'>
        <div className='abt-para'>
        <p className='abt-paras'>
            <h4>About Me</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/>
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <div className='about-img'>
            <img src={photo} alt='capricorn-goat' className='abt-img' />
        </div>
    </div>
    )
}