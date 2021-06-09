import React from 'react';
import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './Cast.module.css';

const Cast = ({ cast = [] }) => {
  return (
    <>
      <ul>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              className={styles.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultAvatar
              }
              alt={name}
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
