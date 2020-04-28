import React from 'react';
import Board from './Board.js';
import Card from './Card.js';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './styles/Home.css';



export default function Home () {

    return (
        <div>
            <main className="flexbox">
                <Board id="board-1" className="board">
                    <Card id="card-1" className="card" draggable="true">
                        <p>Card One</p>
                    </Card>
                </Board>
                <h2>
                    Drag and Drop
                </h2>
                <Board id="board-2" className="board">
                    <Card id="card-2" className="card" draggable="true">
                        <p>Card Two</p>
                    </Card>
                </Board>    
            </main>
        </div>
    )
}