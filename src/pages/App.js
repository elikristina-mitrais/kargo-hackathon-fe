import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Login from "../components/login.component";
import Login from './Login';
import Dashboard from './Dashboard';
//import Home from './Home';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import Navbar from './Navbar';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Navbar />
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );

}

export default App;
