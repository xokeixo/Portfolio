import React from 'react';
import '../styling/About.css';
import photo from '../images/me.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
import { FaHtml5, FaGithub, FaReact, FaPython, FaJava, FaCss3, FaNodeJs } from 'react-icons/fa'

export default function About() {

    return (
        <div className='about' id='about'>
            <div className='about-me'>
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
                'About Me',
                ]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={400}
                />
            </div>
            <div className='about-img'>
            <img src={photo} alt='capricorn-goat' className='abt-img' />
            </div>
           
            <p className='abt-paras'>
                I am a student at Bloom Technology and Institute currently fulfilling my dream as a fullstack developer. I started coding in 2005 in which I never took very serious. So here I am, 17 years later, doing something that I absolutely enjoy all whilst making a difference. 
                <br/>
                <FaHtml5 />
                <FaGithub />
                <FaReact />
                <FaPython />
                <FaJava />
                <FaCss3 />
                <FaNodeJs />
                
            </p>
            </div>

            

            
    // </div>
    )
}