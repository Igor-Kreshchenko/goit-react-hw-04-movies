import React from 'react';
import defaultAvatar from '../../images/defaultAvatar.png';
import styles from './Cast.module.css';

const Cast = ({ cast = [] }) => {
  return (
    <>
      <ul className={styles.CastList}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li className={styles.CastListItem} key={cast_id}>
            <img
              className={styles.Image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultAvatar
              }
              alt={name}
            />
            <div className={styles.CastItemContent}>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
