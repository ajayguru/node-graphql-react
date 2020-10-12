import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

const HomePage = lazy(() => import('./pages/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

const Routes = () => (
  <Suspense fallback={<Loader active content="Loading..." />}>
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
        return (
          localStorage.getItem('token') !== null ?
          <Redirect to="/home" /> :
          <Redirect to="/signin" /> 
        )
    }}
    />
    <Route
      exact
      path="/home"
      component={HomePage}
    />
    <Route
      exact
      path="/signin"
      component={SignInPage}
    />
  </Switch>
  </Suspense>
);

export default Routes;