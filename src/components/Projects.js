import React from 'react';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriterEffect from 'react-typewriter-effect';
import photo from '../images/tic-tac-toe.png';
import '../styling/Projects.css';

export default function Projects() {
    return (
        <div className='projects-div'>
            
            <TypeWriterEffect
            textStyle={{
            color: '#B49FCC',
            fontWeight: 300,
            fontSize: '3em',
            marginLeft: '25%',
            fontFamily: 'Seaweed Script',
            }}
            
            cursorColor="#B49FCC"
            multiText={[
            'Projects',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={400}
            />

    <h2>Updated Frequently</h2>
    <div className='pro-cont'>
        <div class="example">
        <img src={photo} width="400" height="300" alt="house" />
        <div class="fadedbox">
            <div class="title text"> Tic Tac Toe </div>
            <p>A react app that allow users to play tic-tac-toe against one another.</p>
            <a href='https://react-tic-tac-toe-fun.netlify.app/' className='links'>Link</a>
            <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='links'>Code</a>
        </div>
        </div>
                
        <div class="example2">
        <img src={photo} width="400" height="300" alt="house" />
        <div class="fadedbox">
            <div class="title text"> Tic Tac Toe </div>
            <p>A react app that allow users to play tic-tac-toe against one another.</p>
            <a href='https://react-tic-tac-toe-fun.netlify.app/' className='links'>Link</a>
            <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='links'>Code</a>
        </div>
        </div>
    </div>          
                

            
            
            {/* <Carousel>
                <Carousel.Item>
                    <img src={tictactoe} alt='mac cpu' className='mac' />
                    <Carousel.Caption className='caption'>
                        <p>A react app that allow users to play tic-tac-toe against one another.</p>
                        <a href='https://react-tic-tac-toe-fun.netlify.app/' className='links'>Link</a>
                        <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='links'>Code</a>
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
            </Carousel> */}
        </div>
    )
}