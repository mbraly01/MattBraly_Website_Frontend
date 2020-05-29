import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/Homepage/Landing.js';
import CIALanding from './components/CIA/CIALanding.js';
import RandomarmLanding from './components/Randomarm/RandomarmLanding.js';
import Country from './components/CIA/Country';
import Resume from './components/Resume/Resume.js';
import CountryPage from './components/CIA/CountryPage.js';
import Scoreboard from './components/Randomarm/Scoreboard.js';
import BladesLanding from './components/Blades/BladesLanding.js';
import CreateAccount from './components/Blades/CreateAccount.js';
import Login from './components/Blades/Login.js'
import BladesHome from './components/Blades/BladesHome.js';
import NewGame from './components/Blades/NewGame.js';
import BladesApp from './components/Blades/BladesApp.js';
import { withCookies } from 'react-cookie';
import { CookiesProvider } from 'react-cookie';
// import GM from './components/Blades/GM.js';
import CIALanding2 from'./components/CIA/CIALanding.js';
import { useState } from 'react';
import './App.css';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('');
  const [access, setAccess] = useState(false)

  // const handleLogin = (val) => setLoggedIn(val)
  // const handleUser = (val) => setUser(val)


  return (
    <div className="App">
      {/* <CookiesProvider> */}
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component = { Landing }/>
          <Route exact path="/cia" component = { CIALanding }/>
          <Route path="/cia/country/:country" component = { Country }/>
          <Route exact path="/countrypage" component = { CountryPage }/>   
          <Route exact path="/randomarm" component = { RandomarmLanding }/>
          <Route exact path="/randomarm/scoreboard" component = { Scoreboard }/>
          <Route exact path="/blades" component = { BladesApp }/>
          <Route exact path="/pro" component = { Resume }/>
          {/* <Route exact path="/blades" component = { BladesLanding }/>
          <Route exact path="/blades/create" component = {(props) => <CreateAccount {...props} setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access}/>}/>
          <Route exact path="/blades/login" component = {(props) =>  <Login {...props} setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access}/>}/>
          <Route exact path="/blades/home" component = {(props) => <BladesHome {...props} setLoggedIn={setLoggedIn} setUser={setUser} loggedIn={loggedIn} user={user}/>}/> 
          <Route exact path="/blades/newgame" component = {(props) => <NewGame {...props} loggedIn={loggedIn} user={user}/>}/> */}
          </Switch>
        </BrowserRouter>
      {/* </CookiesProvider> */}
    </div>
  );
}

export default withCookies(App)
