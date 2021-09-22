import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './List';
import Home from './Home'
import TruckDetails from './TruckDetails'
import EditTruck from './EditTruck';

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
      <Route
        path="/detail/:id"
        exact
        component={TruckDetails}
      />
      <Route
        path="/edit-detail/:id"
        exact
        component={EditTruck}
      />
    </Switch>
  );
}

export default Routes;
