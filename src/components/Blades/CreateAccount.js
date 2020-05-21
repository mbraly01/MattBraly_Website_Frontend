import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import bcrypt from 'bcryptjs';


export default function CreateAccount(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [response, setResponse] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    async function submitAccount() {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt)
        if (bcrypt.compareSync(password2, hash)) {

            const configs = {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: hash
                })
            }
            const response = await fetch('http://127.0.0.1:5000/blades_account', configs)
            const data = await response.json()

            if (data['user'] == 'true') {
                console.log('success')
                props.setLoggedIn(true)
                props.setUser(username)
                props.setAccess(true)
                
            }

            else if (data['user'] == 'false') {
                setErrorMsg('This username is already taken')
                setUsername('');
                setOpenModal(true)
            }
        }
        else {
            setErrorMsg("Your passwords don't match. Please try again")
            setPassword('')
            setPassword2('')
        }

    }       

    const handleClose = () => {
        setOpenModal(false);
    };

    function SimpleDialogue() {
        return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openModal}>
            <DialogTitle>Account Creation Error</DialogTitle>
            <DialogContentText>{errorMsg}</DialogContentText>
            <Button onClick={handleClose}>Back to Account Creation</Button>
        </Dialog>
    )
    }




    return (
        <div>
            <TextField label='username'
                onChange={e => setUsername(e.target.value)}
            />
            <TextField label='password'
                onChange={e => setPassword(e.target.value)}
            />
            <TextField label='confirm password'
                onChange={e => setPassword2(e.target.value)}
            />
            <Button onClick={submitAccount}>Confirm</Button>
            {props.access ? <Redirect to="/blades/home"/> : <SimpleDialogue/>}
        </div>

    )

}