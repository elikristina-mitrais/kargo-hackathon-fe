import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './List';
import Home from './Home'
import TruckDetails from './TruckDetails'
import EditTruck from './EditTruck';
import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute'
import Dashboard from './Dashboard';

function Routes() {
  return (
    <div className="auth-wrapper">
    <Switch>
      <Route exact path='/' component={Login} />
      <PublicRoute path='/login' component={Login} />
      <Route
        path="/home"
        exact
        component={Home}
      />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
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
    </div>
  );
}

export default Routes;
