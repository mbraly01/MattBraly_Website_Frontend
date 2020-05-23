import React from 'react';
import bcrypt from 'bcryptjs';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Login(props) {


    const [username, setUsername] = useState('1');
    const [password, setPassword] = useState('1');
    const [response, setResponse] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    
    async function submitAccount () {

        const configs = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
            }) 
        }
        const response = await fetch('http://127.0.0.1:5000/blades_login', configs)
        const data = await response.json()




        if (data['user'] == 'false') {
            setErrorMsg('There is an issue with your username')
            setOpenModal(true)
            setResponse(false)
            
        }
        else if (bcrypt.compareSync(password, data['password']) == true) {
            props.setLoggedIn(true)
            props.setUser(username)
            props.setAccess(true)

        }

        else {
            setErrorMsg('There is an issue with your password')
            setOpenModal(true)
            setResponse(false)

        }
    }

    function handleClose() {
        setOpenModal(false);
    };

    function SimpleDialog() {
        return (
            <Dialog onClose={handleClose} aria-labelledby='simple-dialogeu-title' open={openModal}>
                <DialogTitle>Login Error</DialogTitle>
                <DialogContentText>{errorMsg}</DialogContentText>
                <Button onClick={handleClose}>Back to Login Page</Button>
            </Dialog>
        )
    }
    return(
        
        <div>
            {console.log(props.user)}
            <TextField label='username'
                onChange={e => setUsername(e.target.value)}
            />
            <TextField label='password'
                onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={submitAccount}>Confirm</Button>
            { props.access ? <Redirect to="/blades/home"/> : <SimpleDialog/>}
        </div>
    )
}