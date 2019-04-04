import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';

const App = ()=> (
    <Router>
      <div className="App">
        <header className="App-header">
        <Link to ="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
          <Switch>
          <Route exact path="/" component={MoviesList}/>
          {/* <Route path="/test" component={Test}/> */}
          <Route path="/:id" component={Test}/>

          </Switch>
        </header>
      </div>
    </Router>
);
export default App;

const Test = ({match})=> (
  <h2>{match.params.id}</h2>
);