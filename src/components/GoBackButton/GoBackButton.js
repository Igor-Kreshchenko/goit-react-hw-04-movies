import React from 'react';
// import styles from './GoBackButton.module.css';

const GoBackButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Back
    </button>
  );
};

export default GoBackButton;
