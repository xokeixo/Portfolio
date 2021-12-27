import React from 'react';


export default function ContactForm() {
    return (
        <div className='contact' id='contact'>  
            <h2 className='contact-me'>Contact Me</h2>    
            <form action='mailto:iammarkeisha@gmail.com' method='POST' encType='multipart/form-data' name='email-form' className='email-form'>
                Name:
                {/* <br/> */}
                <input type='text' size='19' name='name' className='form-fields name' />
                {/* <br/><br/> */}
                Email:
                {/* <br/> */}
                <input type='text' size='19' name='email' className='form-fields email' />
                {/* <br/><br/> */}
                Message:
                {/* <br/>  */}
                <textarea name='message' rows='6' cols='20' className='form-fields message' />
                {/* <br/> */}
                <input type='submit' value='Submit' className='submitBtn' />
            </form>
        </div>
    )
}