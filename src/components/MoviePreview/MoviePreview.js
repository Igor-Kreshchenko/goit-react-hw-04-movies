import React from 'react';
import defaultImage from '../../images/noPosterImg.png';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ posterUrl, title, vote }) => {
  return (
    <div>
      <img
        className={styles.Image}
        src={
          posterUrl
            ? `https://image.tmdb.org/t/p/w500${posterUrl}`
            : defaultImage
        }
        alt={`${title} poster`}
      />
      <div className={styles.MovieContent}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Vote}>{vote}</p>
      </div>
    </div>
  );
};

export default MoviePreview;
