import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function BladesHome(props) {
    
    const [games, setGames] = useState();
    const [playing, setPlaying] = useState();

    async function addGame() {
    }

    async function oldGame() {

        const configs = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'user': props.user

            })
        }
        const response = await fetch('http://127.0.0.1:5000/get_games', configs)
        data = await response.json()
        setGames(data['games'].map((game) => {
            return (
                <Link></Link>
            )
        }))
    }

    useEffect(() => {
        console.log(props.user)
    },[])

    return(
        <div>
            {console.log(props.user)}
            <Link to="/blades/newgame">Login</Link>
        </div>
    )
}