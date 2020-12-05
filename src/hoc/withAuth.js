import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = state => ({ isLogin: authSelectors.isLogin(state) });

  return withRouter(connect(mapStateToProps)(WithAuth));
};

export default withAuth;
