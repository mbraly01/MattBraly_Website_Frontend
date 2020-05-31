import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useSelect } from 'react-select-search';
import SelectSearch from 'react-select-search';
import Select from 'react-select';
import NavBar from '../NavBar.js';
import '../styles/CIA.css';


export default function CIALanding() {


    // countriesButton holds all the buttons
    // countriesArray holds all the country names for the select search
    // countriesValue holds all the values(not entirely clear why this is necessary
    const [countriesButtons, setCountriesButtons] = useState([])
    const [fullArrayCountries, setFullArrayCountries] = useState([])
    const [searchCountry, setSearchCountry] = useState('')
    const [search, setSearch] = useState('')
      
    async function getCountries() {
        const response = await fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/countries2');
        const data = await response.json();
        setFullArrayCountries(data['country_list'])
        setCountriesButtons(data['country_list'].map((country) => {
            return (
            <a className='buttons' href={country["value"]}>
                <Button>{country["label"]}</Button>
            </a>
        )}))
    }

    useEffect(() => {
        getCountries()
    },[])
        return (
            <div>
                <NavBar/>
                <h1 className="cia-title">CIA World Factbook one-pagers</h1>
                <Select 
                className='select-search'
                defaultValue="Search"
                name="Search"
                options={fullArrayCountries}
                    onChange={val => setSearchCountry(val["label"]), val => setSearch(val["value"])}
                    // Use countries route and then filter to find the appropriate label
                />
            <a className='go-button' href={search}>
            <Button 
            variant='outlined'
            size='large'
            >Go</Button>
            </a>
            <div className='spacer'>     
            <div className='button-holder'>
            {countriesButtons}
            </div>
            </div>
            </div>
        )

}
