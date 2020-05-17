import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';


export default function Country(props) {
    
    const [details, setDetails] = useState('')
    const [pdf, setPdf] = useState('')
    const { country }= props.match.params



    async function getDetails(){
        const configs = {
          method: "POST",
          mode: "cors",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            "country" : country
          })
        };
        const response = await fetch("http://127.0.0.1:5000/details", configs)
        const data = await response.json()
        setDetails(data['details'])
        setPdf(data['details'])

      }
      
    useEffect(() => {
        getDetails()
    },[props.match.params.country])

    return (
        <div>
            <Route
            path="/example"
            component={() => {
            global.window && (global.window.location.href = {details})
            return null;
            }}
          />
          <Redirect to={details}/>
        </div>
    )

}