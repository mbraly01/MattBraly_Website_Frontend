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
      
    async function getCountries() {
        const response = await fetch('http://127.0.0.1:5000/countries2');
        const data = await response.json();
        setFullArrayCountries(data['country_list'])
        setCountriesButtons(data['country_list'].map((country) => {

            return (
            <a href={country["label"]}>
                <Button>{country["country"]}</Button>
            </a>
        )}))

    }

    function getSearch(){
            const search = fullArrayCountries.filter(country => country.country == searchCountry)
        return(
            <a href={search.label}>Hello</a>
        )
    }

    useEffect(() => {
        getCountries()
    },[])
        return (
            <div>
                {console.log(fullArrayCountries)}
                <Select options={fullArrayCountries}

                    onChange={val => setSearchCountry(val["country"])}
                />
            {getSearch}
            <Button>Go</Button>
            {countriesButtons}
            </div>
        )

}
