import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BladesLanding from './BladesLanding.js';
import CreateAccount from './CreateAccount.js';
import Login from './Login.js'
import BladesHome from './BladesHome.js';
import Game from './Game.js';
import NewGame from './NewGame.js';
import { withCookies } from 'react-cookie';
import { CookiesProvider } from 'react-cookie';
import { useState } from 'react';

function BladesApp() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('');
  const [access, setAccess] = useState(false)

  // const handleLogin = (val) => setLoggedIn(val)
  // const handleUser = (val) => setUser(val)


  return (
    <div className="App">
        <CookiesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/blades" component={BladesLanding}/>
                    <Route exact path="/blades/create">
                    <CreateAccount setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access}/>
                    </Route>
                    <Route exact path="/blades/login">
                    <Login setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access} />
                    </Route>
                    <Route exact path="/blades/home">
                    <BladesHome setLoggedIn={setLoggedIn} setUser={setUser} loggedIn={loggedIn} user={user}/>
                    </Route> 
                    <Route exact path="/blades/newgame">
                    <NewGame loggedIn={loggedIn} user={user}/>
                    </Route>
                    <Route path="/blades/game/:game_id" component={Game}/>
                </Switch>
            </BrowserRouter>
        </CookiesProvider>
      {/* <CookiesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/blades" component = { BladesLanding }/>
                <Route exact path="/blades/create" component = {(props) => <CreateAccount {...props} setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access}/>}/>
                <Route exact path="/blades/login" component = {(props) =>  <Login {...props} setLoggedIn={setLoggedIn} setUser={setUser} setAccess={setAccess} access={access}/>}/>
                <Route exact path="/blades/home" component = {(props) => <BladesHome {...props} setLoggedIn={setLoggedIn} setUser={setUser} loggedIn={loggedIn} user={user}/>}/> 
                <Route exact path="/blades/newgame" component = {(props) => <NewGame {...props} loggedIn={loggedIn} user={user}/>}/>
            </Switch>
        </BrowserRouter>
        </CookiesProvider> */}
    </div>
  )
}

export default withCookies(BladesApp)