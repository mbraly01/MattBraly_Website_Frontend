import React from 'react';
import { Link } from 'react-router-dom';
import CIALanding from './CIA/CIALanding';
import './styles/NavBar.css';


export default function NavBar() {

    return (
        <span className='topNav'>
                <Link to='/' className='Link'>Home</Link>
                <Link to='/pro' className='Link'>Resume</Link>
                <div class="dropdown">
                    <button class="dropdown-button">Projects</button>
                    <div class="dropdown-content">
                        <a href="http://www.mattbraly.biz/randomarm">Randomarm</a>
                        <a href="http://www.mattbraly.biz/cia">CIA one pagers</a>
                    </div>
                    </div>
        </span>
    )
}