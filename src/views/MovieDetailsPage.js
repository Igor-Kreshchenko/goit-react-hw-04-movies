import React, { Component } from 'react';
import { fetchMovieById } from '../services/api-service';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

class MovieDetailsPage extends Component {
  state = {
    overview: '',
    id: null,
    poster_path: '',
    title: '',
    reviews: [],
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetchMovieById(movieId);
    console.log(response.data);
    const {
      overview,
      id,
      poster_path,
      title,
      reviews: { results },
      credits: { cast },
    } = response.data;

    this.setState({ overview, id, poster_path, title, reviews: results, cast });
  }

  render() {
    const { overview, poster_path, title } = this.state;
    const { match } = this.props;

    return (
      <>
        <h2>{title}</h2>
        <img src={poster_path && `${BASE_POSTER_URL}${poster_path}`} alt="" />
        <p>{overview}</p>

        <div>
          <NavLink to={`${match.url}/cast`}>
            <span>Cast</span>
          </NavLink>
          <NavLink to={`${match.url}/reviews`}>
            <span>Reviews</span>
          </NavLink>
        </div>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
