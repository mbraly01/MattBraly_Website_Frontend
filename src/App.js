import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Homepage/Home.js';
import './App.css';
import CIALanding from './components/CIA/CIALanding.js';
import RandomarmLanding from './components/Randomarm/RandomarmLanding.js';
import Country from './components/CIA/Country';
import { useState } from 'react';
import CountryPage from './components/CIA/CountryPage.js';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { Home }/>
        <Route path="/cia" component = { CIALanding }/>
        <Route path="/country/:country" component = { Country }/>
        <Route path="/countrypage" component = { CountryPage }/>   
        <Route path="/randomarm" component = { RandomarmLanding }/>      
      </BrowserRouter>
    </div>
  );
}
