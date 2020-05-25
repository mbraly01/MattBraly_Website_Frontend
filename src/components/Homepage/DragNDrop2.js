import React from 'react';
import '../styles/Home.css';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const onDragEnd = (result, columns, setColumns, getDirections) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }})
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items]
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        })
    }
};


export default function DragNDrop (props) {


    return (
        <div style={{displey: 'flex', justifyContent:'center', height: '100%'}}>
            <DragDropContext onDragEnd={result => onDragEnd(result, props.columns, props.setColumns)}>
                            <Droppable droppableId='1' key='1' style={{}}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            // for changing what happens when something is being dragged
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 60
                                            }}
                                        >
                                            {props.columns['1'].items.map((item, index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect: 'none',
                                                                    padding: 16,
                                                                    margin: '0 0 8px 0',
                                                                    minHeight: '50px',
                                                                    backgroundColor: snapshot. isDragging ? ' #263B4A' : '#456C86',
                                                                    color: 'white',
                                                                    ...provided.draggableProps.style
                                                                }}
                                                                >
                                                                {item.content}
                                                                </div> 
                                                            )}}
                                                    </Draggable>
                                                )})}
                                            {provided.placeholder}    
                                        </div>
                                    )
                                }}
                            </Droppable>
                            <Droppable droppableId='2' key='2' style={{}}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            // for changing what happens when something is being dragged
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 60
                                            }}
                                        >
                                            {props.columns['2'].items.map((item, index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect: 'none',
                                                                    padding: 16,
                                                                    margin: '0 0 8px 0',
                                                                    minHeight: '50px',
                                                                    backgroundColor: snapshot. isDragging ? ' #263B4A' : '#456C86',
                                                                    color: 'white',
                                                                    ...provided.draggableProps.style
                                                                }}
                                                                >
                                                                {item.content}
                                                                </div> 
                                                            )}}
                                                    </Draggable>
                                                )})}
                                            {provided.placeholder}    
                                        </div>
                                    )
                                }}
                            </Droppable>
            </DragDropContext>
        </div>
    )
}

// // //         <div>
// // //             <main className="flexbox">
// // //                 <Board id="board-1" className="board">
// // //                     <Card id="card-1" className="card" draggable="true">
// // //                         <p>Dog Loving</p>
// // //                     </Card>
// // //                     <Card id="card-2" className="card" draggable="true">
// // //                         <p>Geopolitically inclined</p>
// // //                     </Card>
// // //                     <Card id="card-2" className="card" draggable="true">
// // //                         <p>Crafty</p>
// // //                     </Card>

// // //                 </Board>
// // //                 <Board id="board-2" className="board">
// // //                     <Card id="card-1" className="card" draggable="true">
// // //                         <p>Javascript Developer</p>
// // //                     </Card>
// // //                     <Card id="card-2" className="card" draggable="true">
// // //                         <p>React Developer</p>
// // //                     </Card>
// // //                     <Card id="card-2" className="card" draggable="true">
// // //                         <p>Python Developer</p>
// // //                     </Card>    
// // //                 </Board>  
// // //                 <h2>
// // //                     Drag and Drop
// // //                 </h2>  
// // //             </main>
// // //         </div>
// // //     )