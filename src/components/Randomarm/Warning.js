import React from 'react';
import {Popup } from 'semantic-ui-react'
import './Warning.css'

export default function Warning(props) {
    return (
        <Popup className='popup'
            trigger={
                <button onClick={props.onReport}>Report</button>
            }
            >
            <Popup.Header>Don't Click Yet</Popup.Header>
            <Popup.Content>
                <h3>Watch out!</h3>
            </Popup.Content>
        </Popup>
    )
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
