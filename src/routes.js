import { lazy } from 'react';

export default [
  {
    path: '/',
    lable: 'HomePage',
    exact: true,
    component: lazy(() =>
      import('./views/HomeView' /* webpackChunkName: 'home-view' */),
    ),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    lable: '',
    exact: true,
    component: lazy(() =>
      import('./views/RegisterView' /* webpackChunkName: 'register-view' */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    lable: '',
    exact: true,
    component: lazy(() =>
      import('./views/LoginViews' /* webpackChunkName: 'login-view' */),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    lable: 'Contacts',
    exact: true,
    component: lazy(() =>
      import('./views/ContactsViews' /* webpackChunkName: 'contacts-view' */),
    ),
    private: true,
    restricted: false,
  },
  {
    path: '',
    lable: '',
    exact: false,
    component: lazy(() =>
      import('./views/NotFound' /* webpackChunkName: 'not-found' */),
    ),
    private: false,
    restricted: false,
  },
];
