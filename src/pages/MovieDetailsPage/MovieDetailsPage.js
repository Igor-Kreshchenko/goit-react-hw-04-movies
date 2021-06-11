import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { fetchMovieById } from '../../services/api-service';
import Movie from '../../components/Movie';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import GoBackButton from '../../components/GoBackButton';
import routes from '../../routes';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieById(movieId)
      .then(({ data }) => {
        this.setState({ movieDetails: data });
      })
      .catch(console.log);
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
        <GoBackButton onClick={handleGoBack} />
        <Movie movieDetails={movieDetails} />
        <div className={styles.NavDetails}>
          <NavLink
            className={styles.NavLinkDetails}
            activeClassName={styles.NavLinkDetailsActive}
            to={`${match.url}/cast`}
          >
            <span>Cast</span>
          </NavLink>
          <NavLink
            className={styles.NavLinkDetails}
            activeClassName={styles.NavLinkDetailsActive}
            to={`${match.url}/reviews`}
          >
            <span>Reviews</span>
          </NavLink>
        </div>

        <Route
          path={`${match.path}/cast`}
          render={props => (
            <Cast {...props} cast={movieDetails?.credits?.cast} />
          )}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => (
            <Reviews {...props} reviews={movieDetails?.reviews?.results} />
          )}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
