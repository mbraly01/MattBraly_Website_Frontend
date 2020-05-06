import React from 'react';


export default function Comic (props) {

    return(
        <div>
            <img src='comic.jpg'/>
            <h1>{props.caption}</h1>
        </div>
    )
}