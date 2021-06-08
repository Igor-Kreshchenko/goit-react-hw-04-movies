import React from 'react';

const MoviePreview = ({ posterUrl, title, vote }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${posterUrl}`} alt="" />
      <p>
        {title}
        <span>{vote}</span>
      </p>
    </div>
  );
};

export default MoviePreview;
