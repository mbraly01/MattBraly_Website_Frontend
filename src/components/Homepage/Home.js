import React from 'react';
import { useState, useEffect } from 'react';
import DragNDrop from './DragNDrop.js';
import { Link } from 'react-router-dom';


export default function Home() {

    const [columns, setColumns] = useState([]);

    const characteristics = [
        { id: "geo", content: 'Geopolitical' },
        { id: "dog", content: 'Dog Loving' },
        { id: "python", content: 'Python' },
        { id: "react", content: 'React ' }
    ];
    
    const starterColumns = {
        "1": {
            name: 'I am',
            items: characteristics
            },
        "2": {
            name: 'and I develop with',
            items: []
        }
    }

    const reRoute = () => {
        if (columns['2']['items'] == "Geopolitical") {
            return (
                <h2><Link to={{
                    pathname: `/cia`}}
                    >See Gallery of Old Logos</Link></h2>
            )
        }
    }     

    useEffect(() => {
        setColumns(starterColumns)
    },[])

    return (
        <div>
            <DragNDrop columns = {columns} setColumns = {setColumns}/>
            <button onClick={e => reRoute()}>Hello</button>               
        </div>
    )
}
