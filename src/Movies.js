import React from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movies=({movie})=> (  
   <div>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </div>
);
export default Movies;
