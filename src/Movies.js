import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movies extends Component{
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
         desc: PropTypes.string
    }

    static defaultProps = {
        desc: 'Description not Available'
    }

    render(){
        return(
            <div>
                <h6>{this.props.movie.title}</h6>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}