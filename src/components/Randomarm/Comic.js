import React from 'react';
import '../styles/Randomarm.css';


export default function Comic (props) {

    return(
        <div>
            <img className='comic' src={props.comicLoc}/>
            <h1 className='caption'>{props.caption}</h1>
        </div>
    )
}