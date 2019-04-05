import React, { Component } from 'react';
import styled from 'styled-components';
import {Poster} from './Movies';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  
  state = {
    movie: {},
    isloading:true
  }

  async componentDidMount(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=28ac7a07c958eb21e3e81a4bc9671dd3&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
        isloading:false
      })
    } catch(e){
      console.log(e);
    }
  }
  render() {
      const {movie} = this.state;

    //   let detail = ( <h1>Hi</h1>);

    //   if(this.state.movie.title){
    //       detail = (
    //         <h4>Hello</h4>
    //       );
    //   }
    return (
        <div>
        {this.state.isloading &&<div>loading ....</div>}
        <MovieWrapper backdrop= {`${BACKDROP_PATH}${movie.backdrop_path}`}>
            <MovieInfo>
            <Overdrive id={movie.id}>
                <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
            </Overdrive>
                <div>
                    {/* {detail} */}
                    {this.state.movie.title ? (
                        <h4>Hello</h4>
                    ):(
                        <h1>Hi</h1>
                    )}

                    <h1>{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                </div>
            </MovieInfo>
        </MovieWrapper>
        </div>
    );
  }
}
export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding:2rem 10%;
    display: flex;
    >div {
        margin-left:20px;
    }
    img {
        position:relative;
        top:-5rem;
    }
`;

