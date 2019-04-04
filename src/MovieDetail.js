import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  
  state = {
    movie: {}
  }

  async componentDidMount(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=28ac7a07c958eb21e3e81a4bc9671dd3&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      })
    } catch(e){
      console.log(e);
    }
  }
  render() {
      const {movie} = this.state;
    return (
        <div>
            <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt=""/>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
        </div>
    );
  }
}
export default MovieDetail;

