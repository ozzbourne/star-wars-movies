import React, { Component } from 'react';

class MovieEntry extends Component {
  
  render() {
    const {movies, filterText} = this.props;
    let updateMovieText = this.props.updateMovieText;
    let filteredMovies = movies.filter(
      (movie) => {
        return (
          movie.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
          movie.episode.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
          movie.date.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        )
        
      }  
    );
    return (
      <div>
        {filteredMovies.map((movie)=>{
          return <div key={movie.episode} onClick={() => updateMovieText(movie.movieText, movie.title, movie.director)} className="custom-btn">
            <div>
              <span className="float-left"><i className="fas fa-film"></i> Episode {movie.episode}</span><span>{movie.title}</span><span className="float-right">{movie.date}</span>
            </div>
          </div>
        })}
        
      </div>
    );
  }
}


export default MovieEntry;






                     