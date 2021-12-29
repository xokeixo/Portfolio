import React from 'react';
import '../styling/Socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
    return (
        <div className='socials'>
            <a href='http://www.twitter.com/keicodes' className='twitter soc'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />  
            </a>
            <a href='http://www.facebok.com/iammarkeisha' className='facebook soc'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />  
            </a>
            <a href='http://www.linkedin.com/in/markeisha-wallace' className='linkedin soc'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />  
            </a>
            <a href='http://www.instagram.com/xokeixo' className='instagram soc'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />  
            </a>
        </div>
    )
}