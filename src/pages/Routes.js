import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './List';
import Home from './Home'

function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/list"
        exact
        component={ListPage}
      />
    </Switch>
  );
}

export default Routes;
