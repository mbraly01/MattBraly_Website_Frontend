import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country.js';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useSelect } from 'react-select-search';
import SelectSearch from 'react-select-search';
import Select from 'react-select';

export default function CIALanding() {


    // countriesButton holds all the buttons
    // countriesArray holds all the country names for the select search
    // countriesValue holds all the values(not entirely clear why this is necessary
    const [countriesButtons, setCountriesButtons] = useState([])
    const [fullArrayCountries, setFullArrayCountries] = useState(["Italy"])
    const [searchCountry, setSearchCountry] = useState('')
      
    async function getCountries() {
        const response = await fetch('http://127.0.0.1:5000/countries');
        const data = await response.json();
        setFullArrayCountries(data['country_list'])
        setCountriesButtons(data['country_list'].map((country) => {

            return (
            <Link to={{pathname:`/country/${country['value']}`
            }}>
            <Button>{country['value']}</Button>
            </Link>
        )}))

    }

    useEffect(() => {
        getCountries()
    },[])
        return (
            <div>
                {console.log(searchCountry)}
                <Select options={fullArrayCountries}
                    onChange onChange={val => setSearchCountry(val["value"])}
                />
            <Link to={{pathname:`/country/${searchCountry}`
                }}>
            <Button>Go</Button>
            </Link>
            {countriesButtons}
            </div>
        )

}
