import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const welcome = "Welcome to React"

class App extends Component {

  toggle1 = () => {
    this.setState({
      toggle1: !this.state.toggle1
    })
  }

  submit = () => {
    console.log(this.text.value);
    console.log(this.email.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to using props in React"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <input type="text" ref={(input) =>this.text = input}/>
            <input type="email" ref={(input) =>this.email = input}/>
           <button onClick={this.submit}>Show value</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    const{ text } = this.props;
    return(
      <h1 className="App-title">{text}</h1>
    )
  }
}
export default App;
