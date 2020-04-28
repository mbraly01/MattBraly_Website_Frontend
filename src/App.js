import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { Home }/>
      </BrowserRouter>
    </div>
  );
}
