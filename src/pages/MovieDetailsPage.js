import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieById } from '../services/api-service';
import Movie from '../components/Movie';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieById(movieId).then(({ data }) => {
      this.setState({ movieDetails: data });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetails } = this.state;
    const { match } = this.props;
    const { handleGoBack } = this;

    return (
      <>
        <button type="button" onClick={handleGoBack}>
          Back
        </button>
        <Movie movieDetails={movieDetails} />
        <div>
          <NavLink to={`${match.url}/cast`}>
            <span>Cast</span>
          </NavLink>
          <NavLink to={`${match.url}/reviews`}>
            <span>Reviews</span>
          </NavLink>
        </div>

        <Route
          path={`${match.path}/cast`}
          render={props => {
            return <Cast {...props} cast={movieDetails.cast} />;
          }}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => (
            <Reviews {...props} reviews={movieDetails.reviews} />
          )}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
