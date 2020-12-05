import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import styles from '../styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <hr className={styles.line} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
