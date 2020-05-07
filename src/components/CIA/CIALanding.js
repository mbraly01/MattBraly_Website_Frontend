import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country.js';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


export default function CIALanding(props) {


    const [countriesList, setCountriesList] = useState([])

    async function getCountries() {
        const response = await fetch('http://127.0.0.1:5000/countries');
        const data = await response.json();
        setCountriesList(data['country_list'].map((country) => {return (
            <Link to={{pathname:`/country/${country[0]}`
            }}>
            <Button>{country[0]}</Button>
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
