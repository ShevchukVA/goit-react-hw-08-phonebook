import React from 'react';
import images from '../images/Phoonebook.png';
import styles from '../styles.module.css';

const HomePage = () => (
  <div>
    <h1 className={styles.title}>Welcome to Phoonebook</h1>
    <img
      src={images}
      alt="Phoonebook"
      width="320"
      height="500"
      className={styles.phoonebook}
    />
  </div>
);

export default HomePage;
