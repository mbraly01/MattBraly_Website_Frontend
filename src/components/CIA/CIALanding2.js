import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country.js';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useSelect } from 'react-select-search';
import SelectSearch from 'react-select-search';
import Select from 'react-select';

export default function CIALanding2() {


    // countriesButton holds all the buttons
    // countriesArray holds all the country names for the select search
    // countriesValue holds all the values(not entirely clear why this is necessary
    const [countriesButtons, setCountriesButtons] = useState([])
    const [fullArrayCountries, setFullArrayCountries] = useState([])
    const [searchCountry, setSearchCountry] = useState('')
    const [search, setSearch] = useState('')
      
    async function getCountries() {
        const response = await fetch('http://127.0.0.1:5000/countries2');
        const data = await response.json();
        setFullArrayCountries(data['country_list'])
        setCountriesButtons(data['country_list'].map((country) => {

            {console.log(country)}
            return (

            <a href={country["value"]}>
                <Button>{country["label"]}</Button>
            </a>
        )}))
    }

    useEffect(() => {
        getCountries()
    },[])
        return (
            <div>
                {console.log(fullArrayCountries)}
                <Select options={fullArrayCountries}

                    onChange={val => setSearchCountry(val["label"]), val => setSearch(val["value"])}
                    // Use countries route and then filter to find the appropriate label
                />
            <a href={search}>
            <Button>Go</Button>
            </a>
            {countriesButtons}
            </div>
        )

}
