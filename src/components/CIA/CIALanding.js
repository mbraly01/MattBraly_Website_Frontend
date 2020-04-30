import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country.js';
export default function CIALanding() {

    const [countriesList, setCountriesList] = useState([])

    const getPdfs = async () => {
        const response = await fetch('http://127.0.0.1:5000/pdfs');
        const data = await response.json();
        setCountriesList(data['country_list'].map((country) => {return (
            <Country
            name={country[0]}
            pdf={country[1]}/>
        )}))
    }
    useEffect(() => {
        getPdfs()
    },[])
        return (
            <div>
            {countriesList}
            </div>
        )


}