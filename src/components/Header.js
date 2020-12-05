import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import styles from '../styles.module.css';

const Header = ({ isLogin }) => (
  <header className={styles.header}>
    <Navigation />
    {isLogin ? <UserMenu /> : <AuthNav />}
  </header>
);

Header.defaultProps = {
  isLogin: '',
};

Header.propTypes = {
  isLogin: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Header);
