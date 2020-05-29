import React from 'react';
import {Popup } from 'semantic-ui-react'
import '../styles/Warning.css'

export default function Warning(props) {
    return (
        <Popup className='popup'
            trigger={
                <button className="rmbutton report" onClick={props.onReport}>Report</button>
            }
            >
            <Popup.Header>Don't Click Yet</Popup.Header>
            <Popup.Content>
                <h3>See if you can rescue it first</h3>
            </Popup.Content>
        </Popup>
    )
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
