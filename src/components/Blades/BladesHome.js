import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NewGame from './NewGame.js';
import io from 'socket.io-client';

export default function BladesHome(props) {
    
    const [games, setGames] = useState();
    const [playing, setPlaying] = useState();
    const [getValue, setGetValue] = useState();

    function getGame() {
        fetch('http://localhost:9000/bladesAPI',
        { method: 'POST',
        body: JSON.stringify({
            req: '1'
            }),
        headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.text())
            .then(res => setGetValue(res))
            console.log(getValue)
    }
    useEffect(() => {
        getGame()
    },[])

    return(
        <div>
            <NewGame user={props.user} loggedIn={props.loggedIn}/>
            <Link to="/blades/newgame">Login</Link>
            <Button onClick={getGame}>Button</Button>
            <p>{getValue}</p>
        </div>
    )
}