import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import { fetchMovieByName } from '../services/api-service';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  onChangeQuery = query => {
    fetchMovieByName(query).then(({ data }) => {
      this.setState({
        movies: [...data.results],
      });
    });
  };

  render() {
    const { onChangeQuery } = this;

    return (
      <div>
        <SearchBar onSubmit={onChangeQuery} />
      </div>
    );
  }
}

export default MoviesPage;
