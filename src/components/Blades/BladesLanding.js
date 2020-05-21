import React from 'react';
import { Link } from 'react-router-dom';

let socket;
export default function BladesLanding() {

    return (
        <div>
        <form></form> 
        <Link to="/blades/create">Create Account</Link>
        <Link to="/blades/login">Login</Link>
        </div>
    )
}