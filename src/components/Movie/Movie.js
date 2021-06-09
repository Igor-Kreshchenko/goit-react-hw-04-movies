import React from 'react';
import defaultImage from '../../images/noPosterImg.jpg';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ movieDetails }) => {
  const { overview, poster_path, title } = movieDetails;

  return (
    <>
      <h2>{title}</h2>
      <img
        src={poster_path ? `${BASE_POSTER_URL}${poster_path}` : defaultImage}
        alt={`${title} poster`}
      />
      <p>{overview}</p>
    </>
  );
};

export default Movie;
