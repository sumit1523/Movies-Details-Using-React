import React from 'react';

const Movies=(props)=> (  
   <div>
        <h6>{props.movie.title}</h6>
    </div>
);
export default Movies;

// Movies.propTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//     }),
// }