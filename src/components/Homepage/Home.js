import React from 'react';
import { useState, useEffect } from 'react';
import DragNDrop from './DragNDrop.js';
import { Link } from 'react-router-dom';


export default function Home() {

    const [ direction, setDirection] = useState('')

    const characteristics = [
        { id: "cia", content: 'Geopolitical' },
        { id: "randomarm", content: 'Dog Loving' },
        { id: "blades", content: "Nerdy" }

    ];
    
    const starterColumns = {
        "1": {
            name: 'I am',
            items: characteristics
            },
        "2": {
            name: 'fullstack developer',
            items: []
        }
    }

    const [columns, setColumns] = useState(starterColumns);
  

    function getDirection() {
        try {
            if(columns['2']['items']['0']['id'] == 'cia') {
                setDirection('cia')
            }
            else if (columns['2']['items']['0']['id'] == 'randomarm') {
                setDirection('randomarm')
            }
            else if (columns['2']['items']['0']['id'] == 'blades') {
                setDirection('blades')
            }
        } catch {
            console.log('error')
        }
    }


    useEffect(() => {
        setColumns(starterColumns)
    },[])

    return (
        <div>
            <DragNDrop columns = {columns} setColumns = {setColumns} getDirection={getDirection}/>
            {/* <button onClick={e => reRoute()}>Go</button>*/}
            <a href={`${direction}`} onClick={getDirection}>Hello</a>
            {/* <h2 onClick={getDirection}><Link to={{
                    pathname: `${direction}`}}
                    >Go</Link></h2> */}
        </div>
    )
}
