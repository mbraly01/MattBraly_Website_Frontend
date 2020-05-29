import React from 'react';
import { Link } from 'react-router-dom';
import CIALanding from './CIA/CIALanding';
import './styles/NavBar.css';


export default function NavBar() {

    return (
        <span className='topNav'>
            <div className='rightNav'>
                <Link to='/' className='Link'>Home</Link>
                <Link to='/pro' className='Link'>Resume</Link>
                <Link to='/cia' className='Link'>CIA</Link>
                <Link to='/randomarm' className='Link'>Randomarm</Link>
            </div>
            
        </span>
    )
}