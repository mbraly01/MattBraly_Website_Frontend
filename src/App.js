import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Homepage/DragNDrop.js';
import './App.css';
import CIALanding from './components/CIA/CIALanding.js';
import RandomarmLanding from './components/Randomarm/RandomarmLanding.js';
import Country from './components/CIA/Country';
import { useState } from 'react';
import CountryPage from './components/CIA/CountryPage.js';

export default function App() {

const [cname, setCName] = useState('')
const [pdf, setPdf] = useState('')
const [details, setDetails] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path="/" component = { Home }/> */}
        <Route path="/cia" component = {(props) => <CIALanding {...props} setCName={setCName} setPdf={setPdf} setDetails={setDetails}/>}/>
        <Route path="/country/:country" component={(props) => <Country {...props} setCName={setCName} details={details} cname={cname}/>}/>
        <Route path="/countrypage" component={CountryPage}/>          
      </BrowserRouter>
    </div>
  );
}
