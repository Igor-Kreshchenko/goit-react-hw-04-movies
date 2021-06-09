import React from 'react';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const Movie = ({ overview, poster_path, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={poster_path && `${BASE_POSTER_URL}${poster_path}`} alt="" />
      <p>{overview}</p>
    </>
  );
};

export default Movie;
