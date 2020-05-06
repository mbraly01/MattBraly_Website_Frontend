import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {useState, useEffect } from 'react';
import CountryPage from './CountryPage'

export default function Country(props) {

    useEffect(() => {
        console.log(props)
    },[])
    return (
        <Button onClick={props.setCName(props.cname)}>Hello</Button>
    )

}