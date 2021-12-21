import React from 'react';


export default function ContactForm() {
    return (
        <div className='contact' id='contact'>      
            <form action='mailto:iammarkeisha@gmail.com' method='POST' enctype='multipart/form-data' name='EmailForm'>
                Name:
                <br/>
                <input type='text' size='19' name='name' />
                <br/><br/>
                Email:
                <br/>
                <input type='text' size='19' name='email' />
                <br/><br/>
                Message:
                <br/> 
                <textarea name='message' rows='6' cols='20' />
                <br/><br/> 
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}