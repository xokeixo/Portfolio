import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Socials from './Socials';
import '../styling/Contact.css';


export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact-me', 'template_7tqernc', form.current, 'user_pbF5YtfJWb0kcFjz7xJ07')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
          })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
      <div class='contact' id='contact'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='contact-me'>
                <h2>Contact Me</h2>
                <br/>
                <p>If you ever want to connect even aside from programming, feel free to send me a message here or connect with me on my other platforms.</p>
                <Socials />
            </div>
            <div className='form-inputs'>
                <input type='text' name='user_name' className='form-field' placeholder='name' required />
                <br/><br/>
                <input type='email' name='user_email' className='form-field' placeholder='email' required />
                <br/><br/>
                <textarea name='message' className='message-field' placeholder='message' required />
                <br/>
                <input type='submit' value='Send' className='submitBtn' />
            </div>
        </form>
    </div>
  );
};