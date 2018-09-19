import React, { Component } from 'react';
//Input field made with bootstrap template

class Searchbar extends Component {
  render() {
    const {search} = this.props;
    let sortMovies = this.props.sortMovies;
    let updateSearch = this.props.updateSearch;
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by...</button>
          <div className="dropdown-menu">
            <div className="text-center">Sort by</div>
            <div className="dropdown-divider"></div>
            {this.props.data.title.map(function(title, index) {
              return <button key={ index }
                             className="dropdown-item"
                             onClick={() => sortMovies(title)}
                             ><i className="fab fa-jedi-order fa-2x"></i> {title}</button>
            })}
          </div>
        </div>
        <input type="text" 
               className="form-control" 
               aria-label="Text input with dropdown button" 
               value={search}
               placeholder="Search by episode, title or release date"
               onChange={updateSearch}></input>
      </div>
    );
  }
}

export default Searchbar;
