import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const welcome = "Welcome to React"

class App extends Component {

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillMount(){
    console.log("Will Mount");
  }
  componentDidMount(){
    console.log("Mounted");
  }

  state = {
    toggle1: true
  }
  toggle1 = () => {
    this.setState({
      toggle1: !this.state.toggle1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to using props in React" toggle1={this.state.toggle1}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.state.toggle1 &&
          <p>This should show and hide</p>
        }
        <button onClick={this.toggle1}>Show / Hide</button>
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
