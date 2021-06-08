import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import { fetchMovieByName } from '../services/api-service';
import MovieList from '../components/MovieList';

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
    const { movies } = this.state;
    const { onChangeQuery } = this;

    return (
      <div>
        <SearchBar onSubmit={onChangeQuery} />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
