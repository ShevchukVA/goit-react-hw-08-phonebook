import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const PublicRoute = ({
  component: Component,
  isLogin,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLogin && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default withAuth(PublicRoute);
