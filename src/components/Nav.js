import React from 'react';
import '../styling/Nav.css';
import { slide as Menu } from 'react-burger-menu'

export default function Nav(){
    // showSettings (event) {
    //     event.preventDefault();
    
    return(
        <div className='nav'>
            {/* image header goes here */}
            <Menu>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </Menu>
        </div>
    )
}