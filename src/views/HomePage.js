import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../services/api-service';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetchPopularMovies();
    this.setState({ movies: response.data.results });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>Popular Movies</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
