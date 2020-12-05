import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.status}>404</h1>
    <p>
      Страница не найдена. Вот <Link to="/">ссылка</Link> на главную страницу
    </p>
  </div>
);

export default NotFound;
