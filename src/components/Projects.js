import React from 'react';
import mac from '../images/mac.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Projects() {
    return (
        <div className='idk'>
            <h2 className='projects' id='projects'>Projects</h2>
            <Carousel>
                <Carousel.Item>
                    <img src={mac} alt='mac cpu' className='mac' />
                    <Carousel.Caption className='caption'>
                        <p>This is a caption.</p>
                        <button>Link</button>
                        <button>Code</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mac} alt='mac cpu' className='mac' />
                    <Carousel.Caption className='caption'>
                        <p>This is another caption.</p>
                        <button>Link</button>
                        <button>Code</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}