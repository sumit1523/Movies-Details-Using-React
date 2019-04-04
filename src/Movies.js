import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movies=({movie})=> (  

    <Link to={`/${movie.id}`}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>       
    </Link>

);
export default Movies;

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`;