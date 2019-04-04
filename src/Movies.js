import React from 'react';
import { Link } from 'react-router-dom';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movies=({movie})=> (  
   <div>
       {/* <Link to="/test">
         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>       
       </Link> */}

       <Link to={`/${movie.id}`}>
         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>       
       </Link>
    </div>
);
export default Movies;
