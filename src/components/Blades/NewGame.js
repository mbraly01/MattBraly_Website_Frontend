import React from 'react';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {TextField} from '@material-ui/core/TextField';


export default function NewGame(props) {

    const [gameName, setGameName] = useState('1234')
    const [gameCode, setGameCode] = useState('1234')
    const [open, setOpen] = useState(false)
    async function newGame() {

        const configs = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                'game_name': gameName,
                'user': props.user
            })
        }
        const response = await fetch('http://127.0.0.1:5000/new_game', configs)
        const data = await response.json()
        console.log(data)
        setGameCode(data['game_code'])
        setOpen(true)
    }

    function handleClose() {
        setOpen(false);
    }

    function SimpleDialog() {
        return(
            <div>
                {console.log(props.user)}
            <Button onClick={newGame}>Button</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Your Game Code</DialogTitle>
                <DialogContentText> Your game code is:{gameCode}</DialogContentText>
                <CopyToClipboard text={gameCode}>
                    <Button>Copy to Clipboard</Button>
                </CopyToClipboard>
                <Button onClick={handleClose}>Back</Button>
            </Dialog>
            </div>
        )
    }
    return(
        <div>
        <TextField 
        onChange={e => setGameName(e.target.value)}></TextField>
        <div><SimpleDialog/></div>
        </div>
    )



}