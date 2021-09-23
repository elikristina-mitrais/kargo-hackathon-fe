import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import ListPage from './List';
import Home from './Home'
import TruckDetails from './TruckDetails'
import EditTruck from './EditTruck';
import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'

function Routes() {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <PublicRoute path='/login' component={Login} />
      <PrivateRoute
        path="/home"
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
    </Router>
  );
}

export default Routes;
