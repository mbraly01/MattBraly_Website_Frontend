import React from 'react';
import { useEffect, useState } from 'react';

export default function ScoreBoard() {

    const [board, setBoard] = useState('')
    async function getBoard() {

        const response = await fetch('http://127.0.0.1:5000/board')
        const data = await response.json()
        console.log(data)
        setBoard(data['board'].map((person) => {
            return (
                <div>
                    <h2 className='right'>{person[1]}</h2>
                    <h2 className='left'>{person[0]}/{person[2]}</h2>
                </div>

            )
        }))
    }

    useEffect(() => {
        getBoard()
    },[])

        return(
            <div>
            {board}
            </div>
        )
}
