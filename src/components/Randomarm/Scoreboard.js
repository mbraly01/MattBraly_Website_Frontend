import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Randomarm.css';


export default function Scoreboard() {

    const [board, setBoard] = useState('')
    async function getBoard() {

        const response = await fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/board')
        const data = await response.json()
        console.log(data)
        setBoard(data['board'].map((person) => {
            return (
                <div className="scoreboard">
                    <span className='rmspan'>
                    <h2 className='rmright'>{person[1]}</h2>
                    </span><span className='rmspan'>
                    <h2 className='rmleft'>{person[0]}/{person[2]}</h2>
                    </span>
                </div>

            )
        }))
    }

    useEffect(() => {
        getBoard()
    },[])

        return(
            <div className="scoreboard">
            {board}
            </div>
        )
}
