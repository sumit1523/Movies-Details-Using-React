import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movies extends Component{
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    }

    render(){
        return(
            <div>
                <h6>{this.props.movie.title}</h6>
            </div>
        )
    }
}