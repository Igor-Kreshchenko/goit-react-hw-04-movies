import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import styles from './MovieList.module.css';

const MovieList = ({ movies, match }) => {
  return (
    <ul className={styles.List}>
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <li className={styles.ListItem} key={id}>
          <Link to={`${match.url}movies/${id}`}>
            <MoviePreview
              posterUrl={poster_path}
              title={title}
              vote={vote_average}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
