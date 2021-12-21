import React from 'react';
import comp from '../images/mac.png';

export default function Projects() {

    return (
        <div className='project-container' id='projects'>
            <h2>Projects</h2>

            <div className='sect'>
                <div className='para1'>
                <p>
                    <h4>Tic-Tac-Toe</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Link</button>
                <button>Code</button>
                </div>
                <div className='image1'>
                    <img src={comp} alt='mac-computer' className='mac-cpu' />
                </div>
            </div>
            
            <div className='sect'>
            <div className='image1'>
                    <img src={comp} alt='mac-computer' className='mac-cpu' />
                </div>
                <div className='para1'>
                <p>
                    <h4>Tic-Tac-Toe</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Link</button>
                <button>Code</button>
                </div>
                
            </div>

            <div className='sect'>
                <div className='para1'>
                <p>
                    <h4>Tic-Tac-Toe</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button>Link</button>
                <button>Code</button>
                </div>
                <div className='image1'>
                    <img src={comp} alt='mac-computer' className='mac-cpu' />
                </div>
            </div>

        </div>
    )
}