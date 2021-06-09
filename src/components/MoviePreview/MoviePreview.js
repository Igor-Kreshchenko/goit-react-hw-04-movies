import React from 'react';
import defaultImage from '../../images/noPosterImg.jpg';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ posterUrl, title, vote }) => {
  return (
    <div>
      <img
        className={styles.image}
        src={
          posterUrl
            ? `https://image.tmdb.org/t/p/w300${posterUrl}`
            : defaultImage
        }
        alt={`${title} poster`}
      />
      <p>
        {title}
        <span>{vote}</span>
      </p>
    </div>
  );
};

export default MoviePreview;
