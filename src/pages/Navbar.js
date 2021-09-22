import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link">LMS |</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/shipments"}>Shipments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/trucks"}>Trucks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/driver"}>Driver</Link>
              </li>
            </ul>
          </div>
  );
}
 
export default Navbar;