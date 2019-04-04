import React from 'react';
import PropTypes from 'prop-types';

const Movies=(props)=> (  
   <div>
        <h6>{props.movie.title}</h6>
    </div>
);
export default Movies;

Movies.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}