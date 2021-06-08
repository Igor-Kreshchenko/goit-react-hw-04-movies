import React from 'react';

const Cast = ({ cast }) => {
  return (
    <>
      <h1>Actors</h1>
      <ul>
        {cast.map(item => (
          <li key={item.cast_id}>
            <img
              src={
                item.profile_path &&
                `https://image.tmdb.org/t/p/w500${item.profile_path}`
              }
              alt={item.name}
              width="200"
            />
            <h3>{item.name}</h3>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
