import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const PrivateRoute = ({ component: Component, isLogin, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isLogin ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default withAuth(PrivateRoute);
