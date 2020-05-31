import React from 'react';
import { useState, useEffect } from 'react';
import DragNDrop from './DragNDrop.js';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar.js';
import Button from '@material-ui/core/Button';
import '../styles/Landing.css';



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
                setDirection('http://www.mattbraly.biz/cia')
            }
            else if (columns['one']['items']['0']['id'] == 'randomarm') {
                setDirection('http://www.mattbraly.biz/randomarm')
            }
            else if (columns['one']['items']['0']['id'] == 'blades') {
                setDirection('http://www.mattbraly.biz/blades')
            }
            else if (columns['one']['items']['0']['id'] == 'pro') {
                setDirection('http://www.mattbraly.biz/pro')
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
        <NavBar/>
        <h1 className='matt'>Matt Braly</h1>
        <div className='container grid'>
            <h2 className='left'>I am a</h2>
            <div className='dragNdrop'>
                <DragNDrop columns = {columns} setColumns = {setColumns} getDirection={getDirection}
                direction={direction} getDirection={getDirection}/>
                    {/* <button onClick={e => reRoute()}>Go</button>*/}
                    
                    {/* <h2 onClick={getDirection}><Link to={{
                            pathname: `${direction}`}}
                    >Go</Link></h2> */}
            </div>
        <h2 className='right'>Full Stack Developer</h2>
        </div>
        {/* <a className='goButton' href={`${direction}`} onClick={getDirection}>Go</a> */}
        </div>
    )
}
