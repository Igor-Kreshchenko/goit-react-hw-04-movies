import React from 'react';
import defaultImage from '../../images/noPosterImg.jpg';
import styles from './Movie.module.css';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ movieDetails }) => {
  const { overview, poster_path, title } = movieDetails;

  return (
    <div className={styles.MovieBox}>
      <img
        src={poster_path ? `${BASE_POSTER_URL}${poster_path}` : defaultImage}
        alt={`${title} poster`}
      />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};

export default Movie;
