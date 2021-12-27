import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Header() {

    return (
        <div className='header'>
            <h2 className='head-h2'>Welcome, my name is</h2>
            <TypeWriterEffect
            textStyle={{
            color: '#412234',
            fontWeight: 300,
            fontSize: '5em',
            }}
            
            cursorColor="#412234"
            multiText={[
            'Markeisha Wallace',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={1000}
            />
            <h2 className='head-h2'>I like to build things.</h2>
            <h3 className='head-h3'>I am a software engineer and i specialize in<br/> 
            creating applications using my knowledge of javascript<br/>
            to make those around me lives easier</h3>
        </div>
    )
}