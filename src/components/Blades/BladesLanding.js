import React from 'react';
import socketIOClient from 'socket.io-client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

let socket;
export default function BladesLanding() {


    // async function login() {

    //     const configs = {
    //     method:'POST',
    //     mode:'cors',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({
    //         "username": username,
    //         "password": password
    //         })
    //     };
    // }
        
    return (
        <div>
        <form></form> 
        <Link to={{ pathname: '/blades/create'}}>Create Account</Link>
        <Link to={{ pathname: '/blades/login'}}>Login</Link>
        <button>Player</button>
        <button>GM</button>
        </div>
    )
}