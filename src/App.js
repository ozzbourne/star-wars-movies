import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Searchbar from './partials/Searchbar';
import MovieEntry from './partials/MovieEntry';
import MovieDetails from './partials/MovieDetails';
import ClearState from './partials/ClearState';

const sortBy = {
  title: ["Episode", "Year"]
};

//Creates a initialState variable that I can call if I want the app to clear/restart
const initialState = {
  movieText: "Click any of the movies to the left to get a recap.",
  movieTitle: "",
  movies: [],
  buttonClass: "disabled",
  search: "",
  director: "",
};

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = initialState;
    
  }
  
  updateMovieText(newMovieText, newMovieTitle, director){
    this.setState({movieText:newMovieText,
                  movieTitle:newMovieTitle,
                  buttonClass:"",
                  director:director})
  }
  
  sortMovies(sortBy){
    const {movies} = this.state;
    if(sortBy === "Episode"){
      this.setState({
        movies:movies.sort((a,b) => a.episode > b.episode)}
      )
    }
    else if(sortBy === "Year"){
      this.setState({
        movies:movies.sort((a,b) => a.date > b.date)}
      )
    }
  }
  
  //Clears the right field of app (removes all changes made to state for all except the fetch movie-data (array movies).)
  clearState(){
    this.setState({movieText:initialState.movieText,
                   movieTitle:initialState.movieTitle,
                   buttonClass:initialState.buttonClass,
                   director:initialState.director});
  }
  
  
  
  componentDidMount(){
    fetch("https://star-wars-api.herokuapp.com/films")
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.map(movie => ({
      episode: `${movie.fields.episode_id}`,
      title: `${movie.fields.title}`,
      date: `${movie.fields.release_date}`,
      movieText: `${movie.fields.opening_crawl}`,
      director: `Director: ${movie.fields.director}`
    })))
    .then(movies => this.setState({
      movies
    }))
    .catch(error => console.log("Fetching failed;", error))
  }
  
  updateSearch(event){
      this.setState({search:event.target.value})
  }
  
 render() {
    
    
    const {movies, buttonClass, search, movieText, movieTitle, director} = this.state;
    const updateMovieText  =   this.updateMovieText;
    const sortMovies       =   this.sortMovies;
    const clearState       =   this.clearState;
    const updateSearch     =   this.updateSearch;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search our library</h1>
        </header>
        <div className="container mt-5">
          <Searchbar 
            data={sortBy}
            sortMovies={sortMovies.bind(this)}
            updateSearch={updateSearch.bind(this)}
            value={search}
            />
          <div className="row mt-2">
            <div className="col-md-12 col-lg-6">
              <MovieEntry 
                movies = {movies}
                updateMovieText = {updateMovieText.bind(this)}
                filterText = {search}/>
            </div>
            <div className="col-md-12 col-lg-6">
              <ClearState
                clearState = {clearState.bind(this)}
                buttonClass = {buttonClass}/>
              <MovieDetails 
                movieText={movieText}
                title={movieTitle}
                director={director}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
