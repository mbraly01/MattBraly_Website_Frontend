import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Homepage/Home.js';
import './App.css';
import CIALanding from './components/CIA/CIALanding.js';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { Home }/>
        <Route exact path="/cia" component = {CIALanding }/>
      </BrowserRouter>
    </div>
  );
}
