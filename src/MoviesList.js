import React, { PureComponent } from 'react';
import Movies from './Movies';
import styled from 'styled-components';
class MoviesList extends PureComponent {
  
  state = {
    movies: [],
    isloading:true
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=28ac7a07c958eb21e3e81a4bc9671dd3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
        isloading:false
      })
    } catch(e){
      console.log(e);
    }
  }
  render() {
    return (
      <div>
      {this.state.isloading &&<div>loading ....</div>}
        <MovieGrid>
          {this.state.movies.map(movie => <Movies key= {movie.id} movie={movie}/>)}
        </MovieGrid>
      </div> 
    );
  }
}
export default MoviesList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;

