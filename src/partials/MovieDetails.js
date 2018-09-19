import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    const {movieText, title, director} = this.props;
    return (
        <div className="movieTextContainer">
          <h3>{title}</h3>
          <p>{movieText}</p>
          <p>{director}</p>
        </div>
        
    );
  }
}

export default MovieDetails;
