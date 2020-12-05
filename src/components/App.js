import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout';
import routes from '../routes';
import Loader from './loader/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { authOperations } from '../redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.lable} {...route} />
                ) : (
                  <PublicRoute key={route.lable} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
