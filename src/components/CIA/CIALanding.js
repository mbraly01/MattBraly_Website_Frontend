import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country.js';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


export default function CIALanding(props) {


    const [countriesList, setCountriesList] = useState([])

    const getCountries = async () => {
        const response = await fetch('http://127.0.0.1:5000/countries');
        const data = await response.json();
        setCountriesList(data['country_list'].map((country) => {return (
            <Link to={{pathname:'/country',
            }}>
            <Country cname1={country[0]} details={country[2]} setCName={props.setCName}>{country[0]}</Country>
            </Link>
        )}))
    }

    useEffect(() => {
        getCountries()
    },[])
        return (
            <div>
            {countriesList}
            </div>
        )

}
