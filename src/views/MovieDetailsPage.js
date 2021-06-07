import React, { Component } from 'react';
import { fetchMovieById } from '../services/api-service';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    id: null,
    poster_path: null,
    title: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetchMovieById(movieId);
    console.log(response.data);

    this.setState({ ...response.data });
  }

  render() {
    const { overview, poster_path, title } = this.state;

    return (
      <>
        <h2>{title}</h2>
        <img src={`${BASE_POSTER_URL}${poster_path}`} alt="" />
        <p>{overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
