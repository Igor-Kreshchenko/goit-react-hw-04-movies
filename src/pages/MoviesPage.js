import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import { fetchMovieByName } from '../services/api-service';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const movies = localStorage.getItem('movies');
    const parsedMovies = JSON.parse(movies);

    if (parsedMovies) {
      this.setState({ movies: parsedMovies });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { movies } = this.state;

    if (movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

  onChangeQuery = query => {
    fetchMovieByName(query)
      .then(({ data }) => {
        this.setState({
          movies: data.results,
        });
      })
      .catch(console.log);
  };

  render() {
    const { movies } = this.state;
    const { onChangeQuery } = this;

    return (
      <>
        <SearchBar onSubmit={onChangeQuery} />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
