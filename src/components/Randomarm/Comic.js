import React from 'react';


export default function Comic (props) {

    return(
        <div>
            <img src={props.comicLoc}/>
            <h1>{props.caption}</h1>
        </div>
    )
}