import React, { Component } from 'react';
import Movies from './Movies';

class MoviesList extends Component {
  
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
        <div>
          {this.state.movies.map(movie => <Movies key= {movie.id} movie={movie}/>)}
        </div>
    );
  }
}
export default MoviesList;

