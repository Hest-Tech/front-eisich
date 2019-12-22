import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
);