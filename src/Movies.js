import React, { Component } from 'react';

export default class Movies extends Component{
    render(){
        return(
            <div>
                {this.props.movie.title}
            </div>
        )
    }
}