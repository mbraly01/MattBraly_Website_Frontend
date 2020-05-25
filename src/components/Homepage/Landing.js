import React from 'react';
import { useState, useEffect } from 'react';
import DragNDrop from './DragNDrop.js';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar.js'
import './Home.css';


export default function Landing() {

    const [ direction, setDirection] = useState('')

    const characteristics = [
        { id: "cia", content: 'Geopolitical' },
        { id: "randomarm", content: 'Dog Loving' },
        // { id: "blades", content: "Nerdy" },
        { id: "pro", content: "Professional" }

    ];
    
    const starterColumns = {
        "one": {
            name: 'I am a',
            items: []
        },
        "two": {
            name: 'full stack developer',
            items: characteristics
            }
    }

    const [columns, setColumns] = useState(starterColumns);
  

    function getDirection() {
        try {
            if(columns['one']['items']['0']['id'] == 'cia') {
                setDirection('cia')
            }
            else if (columns['one']['items']['0']['id'] == 'randomarm') {
                setDirection('randomarm')
            }
            else if (columns['one']['items']['0']['id'] == 'blades') {
                setDirection('blades')
            }
            else if (columns['one']['items']['0']['id'] == 'pro') {
                setDirection('pro')
            }
            console.log('works')
        } catch {
            console.log('error')
            console.log(columns['one']['items'])
        }
    }


    useEffect(() => {
        setColumns(starterColumns)
    },[])

    return (
        <div>
        <h1>Matt Braly</h1>
        <h2>Drag and Drop</h2>
        <div style={{minWidth:'500px'}}>
        <span><DragNDrop columns = {columns} setColumns = {setColumns} getDirection={getDirection} style={{disply: 'table-row'}}/>
            </span>
            {/* <button onClick={e => reRoute()}>Go</button>*/}
            <a href={`${direction}`} onClick={getDirection}>Go</a>
            {/* <h2 onClick={getDirection}><Link to={{
                    pathname: `${direction}`}}
                    >Go</Link></h2> */}
        </div>
        </div>
    )
}
