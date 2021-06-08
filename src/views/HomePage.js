import React, { Component } from 'react';
import { fetchPopularMovies } from '../services/api-service';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetchPopularMovies();
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Popular Movies</h1>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
