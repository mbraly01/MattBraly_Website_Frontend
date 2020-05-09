import React from 'react';
import comic from './Media/comic.png';


export default function Comic (props) {

    return(
        <div>
            <img src={comic}/>
            <h1>{props.caption}</h1>
        </div>
    )
}