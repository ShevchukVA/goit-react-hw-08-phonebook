import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import { Button } from 'react-bootstrap';
import styles from '../styles.module.css';

const UserMenu = ({ email, onLogout }) => (
  <div>
    <span className={styles.text}>Welcome, {email}</span>
    <Button variant="outline-secondary" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

UserMenu.defaultProps = {
  email: '',
};

UserMenu.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
