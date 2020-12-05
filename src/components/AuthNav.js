import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      to="/register"
      className={styles.text}
      activeClassName={styles.activeText}
    >
      Register
    </NavLink>
    <NavLink
      exact
      to="/login"
      className={styles.text}
      activeClassName={styles.activeText}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
