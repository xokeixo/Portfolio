import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';


export default function Header() {

    return (
        <div className='header'>
           
            <h2 className='head-h2'>Welcome, my name is</h2>
            <TypeWriterEffect
            textStyle={{
            color: '#B49FCC',
            fontWeight: 300,
            fontSize: '5em',
            fontFamily: 'Roboto Mono',
            }}
            
            cursorColor="#B49FCC"
            multiText={[
            'Markeisha Wallace',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={700}
            />
            <br/>
            <h2 className='head-h2'>I like to build things.</h2>
            <br/>
            <h3 className='head-h3'>I am a software engineer from New Orleans, LA.<br/> 
            I like creating custom websites to help make those<br/> around me lives easier and efficient.</h3>
            <br/><br/><br/><br/><br/><br/><br/>
            <i class='arrow down'></i>
        </div>
    )
}