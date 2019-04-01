import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to React"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to React"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    return(
      <h1 className="App-title">{welcome}</h1>
    )
  }
}
export default App;
