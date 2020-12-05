import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import routes from '../routes';
import styles from '../styles.module.css';

const Navigation = ({ isLogin }) => (
  <nav className={styles.list}>
    {routes.map(
      route =>
        (!route.private || isLogin) && (
          <NavLink
            exact={route.exact}
            key={route.path}
            to={route.path}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            {route.lable}
          </NavLink>
        ),
    )}
  </nav>
);

const mapStateToProps = state => ({ isLogin: authSelectors.isLogin(state) });

export default connect(mapStateToProps)(Navigation);
