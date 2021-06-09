import React from 'react';
import styles from './GoBackButton.module.css';

const GoBackButton = ({ onClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Back
    </button>
  );
};

export default GoBackButton;
