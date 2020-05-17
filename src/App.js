import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Homepage/Home.js';
import CIALanding from './components/CIA/CIALanding.js';
import RandomarmLanding from './components/Randomarm/RandomarmLanding.js';
import Country from './components/CIA/Country';
import CountryPage from './components/CIA/CountryPage.js';
import Scoreboard from './components/Randomarm/Scoreboard.js';
import BladesLanding from './components/Blades/BladesLanding.js';
// import GM from './components/Blades/GM.js';
import CIALanding2 from'./components/CIA/CIALanding2.js';

import './App.css';


export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { Home }/>
        <Route exact path="/cia" component = { CIALanding2 }/>
        <Route path="/cia/country/:country" component = { Country }/>
        <Route exact path="/countrypage" component = { CountryPage }/>   
        <Route exact path="/randomarm" component = { RandomarmLanding }/>
        <Route exact path="/randomarm/scoreboard" component = { Scoreboard }/>
        {/* <Route exact path="/blades" component = { BladesLanding }/> */}
        {/* <Route path="/blades       */}
      </BrowserRouter>
    </div>
  );
}
