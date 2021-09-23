import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from "../utils/history";
import StaffPage from './Staff/Index';
import StaffDetailPage from './Staff/Detail';
import Home from './Home'
import Login from './Login'

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact path="/"
          component={Login}
        />
        <Route
          path="/staffs"
          exact
          component={StaffPage}
        />
        <Route
          path="/staffs/detail/:id"
          exact
          component={StaffDetailPage}
        />
        <Route
          exact path="/home"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default Routes;