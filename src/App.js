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
import Scoreboard from './components/Randomarm/Scoreboard.js';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { Home }/>
        <Route exact path="/cia" component = { CIALanding }/>
        <Route path="cia/country/:country" component = { Country }/>
        <Route exact path="/countrypage" component = { CountryPage }/>   
        <Route exact path="/randomarm" component = { RandomarmLanding }/>
        <Route exact path="/randomarm/scoreboard" component = { Scoreboard }/>      
      </BrowserRouter>
    </div>
  );
}
