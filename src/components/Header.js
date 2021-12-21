import React from 'react';
import image from '../images/outer-space.jpg';

export default function Header() {

    return (
        <div className='header'>
            <img src={image} alt='outer-space' className='header'/>
        </div>
    )
}