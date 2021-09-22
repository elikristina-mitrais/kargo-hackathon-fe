import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StaffPage from './Staff/Index';
import StaffDetailPage from './Staff/Detail';
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
        path="/staffs"
        exact
        component={StaffPage}
      />
      <Route
        path="/staffs/detail/:id"
        exact
        component={StaffDetailPage}
      />
    </Switch>
  );
}

export default Routes;