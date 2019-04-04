import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

class App extends Component {
  
  state = {
    movies: []
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=28ac7a07c958eb21e3e81a4bc9671dd3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      })
    } catch(e){
      console.log(e);
    }
  }
  render() {
    console.log(this.state.movies);
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route path="/test" component={Test}/>
          {this.state.movies.map(movie => <Movies key= {movie.id} movie={movie}/>)}
        </header>
      </div>
      </Router>
    );
  }
}
export default App;

const Test = ()=> (
  <h2>This is TEST Page</h2>
);