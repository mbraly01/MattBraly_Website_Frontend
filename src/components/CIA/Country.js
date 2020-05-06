import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {useState, useEffect } from 'react';
import CountryPage from './CountryPage'

export default function Country(props) {
    
    return (
        <div>
         {console.log(props.cname)}
        <Button onClick={props.setCName(props.cname1), console.log(props.cname, props.cname1)}>{props.cname1}</Button>
        </div>
    )

}