import React from 'react';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriterEffect from 'react-typewriter-effect';
// import photo from '../images/tic-tac-toe.png';
import '../styling/Projects.css';

export default function Projects() {
    return (
        <div className='projects-div'>
            <div className='my-projects'>
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
            </div>

    <div className='pro-cont'>
        {/* frameworks: bootstrap, express
        languages: javascript, sql, 
        tools: visual studio code, github
        libraries: react */}
        <section>
                <h1 className='game'>Tic Tac Toe</h1>
                <h6><em>Framework:</em> Javascript | <em>Languages:</em> HTML/CSS, Javascript | <em>Libraries:</em> React | <em>Tools:</em> VS Code, Github</h6>
                <p> 
                    A react app that allow users to play tic-tac-toe against one another.
                </p>
                <p>
                    <a href='https://react-tic-tac-toe-fun.netlify.app/' className='links'>Link</a>
                    <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='links'>Code</a>
                </p>
        </section>
        <section>
            <h1 className='fitness'>Anywhere Fitness</h1>
                <h6><em>Framework:</em> Javascript | <em>Languages:</em> Javascript | <em>Libraries:</em> React, Redux, Axios, Yup | <em>Tools:</em> VS Code, Github</h6>
                <p> 
                Created an easy to use interface that helped users add or register for fitness classes that fit their schedule.
                </p>
                <p>
                    <a href='https://fitness-anywhere.netlify.app' className='links'>Link</a>
                    <a href='https://github.com/BW-Fitness' className='links'>Code</a>
                </p>
        </section>
        <section>
            <h1 className='recipes'>Secret Family Recipes API</h1>
                <h6><em>Framework:</em> Javascript, Express | <em>Languages:</em> Javascript, SQLite, Typescript | <em>Libraries:</em> React, Redux | <em>Tools:</em> VS Code, Github, Heroku</h6>
                <p> 
                Created an easy to use interface that helped users add or register for fitness classes that fit their schedule.
                </p>
                <p>
                    <a href='https://boiling-sands-42739.herokuapp.com/' className='links'>Link</a>
                    <a href='https://github.com/family-recipes-build-week' className='links'>Code</a>
                </p>
        </section>
        {/* <div class="example">
        <img src={photo} width="400" height="300" alt="house" className='proj-img' />
        <div class="fadedbox">
            <div class="title text"> Tic Tac Toe </div>
            <p>A react app that allow users to play tic-tac-toe against<br/> one another.</p>
            <a href='https://react-tic-tac-toe-fun.netlify.app/' className='links'>Link</a>
            <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='links'>Code</a>
        </div>
        </div>
                
        <div class="example2">
        <img src={photo} width="400" height="300" alt="house" className='proj-img' />
        <div class="fadedbox">
            <div class="title text"> Anywhere Fitness </div>
            <p>Created an easy to use interface that helped users add<br/>or register for fitness classes that fit their schedule.</p>
            <a href='https://fitness-anywhere.netlify.app' className='links'>Link</a>
            <a href='https://github.com/BW-Fitness' className='links'>Code</a>
        </div>
        </div>
                
        <div class="example2">
        <img src={photo} width="400" height="300" alt="house" className='proj-img' />
        <div class="fadedbox">
            <div class="title text"> Recipes API </div>
            <p>An API created using Node.js, Express and Knex that<br/>provides register, login and logout functionality.</p>
            <a href='https://boiling-sands-42739.herokuapp.com/' className='links'>Link</a>
            <a href='https://github.com/family-recipes-build-week' className='links'>Code</a>
        </div>
        </div> */}


         {/* <Carousel className='carousel'>
                <Carousel.Item>
                    <img src={photo} alt='tic-tac-toe' className='caro-img'/>
                    <Carousel.Caption className='caption'>
                        <p>A react app that allow users to play tic-tac-toe against one another.</p>
                        <a href='https://react-tic-tac-toe-fun.netlify.app/' className='link-btn'>Link</a>
                        <a href='https://github.com/xokeixo/Tic-Tac-Toe' className='code-btn'>Code</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={silverware} alt='mac cpu' className='caro-img'/>
                    <Carousel.Caption className='caption'>
                        <p>An API created using Node.js, Express and Knex that provides register, login and logout functionality.</p>
                        <a href="https://boiling-sands-42739.herokuapp.com/" className='link-btn'>Link</a>
                        <a href="https://github.com/family-recipes-build-week" className='code-btn'>Code</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={exercise} alt='mac cpu' className='caro-img'/>
                    <Carousel.Caption className='caption'>
                        <p>An API created using Node.js, Express and Knex that provides register, login and logout functionality.</p>
                        <a href="https://boiling-sands-42739.herokuapp.com/" className='link-btn'>Link</a>
                        <a href="https://github.com/family-recipes-build-week" className='code-btn'>Code</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>           
    </div>
    )
}