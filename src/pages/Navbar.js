import React from 'react';
import { Link } from "react-router-dom";
import { getRole } from '../utils/Common';

function Navbar() {
  const role = getRole();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link">LMS |</Link>
              </li>

              { role == 'transporter' &&
              <li className="nav-item">
              <Link className="nav-link" to={"/shipments"}>Shipments</Link>
              </li>
              }

              { role == 'transporter' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/trucks"}>Trucks</Link>
              </li>
              }
              { role == 'transporter' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/driver"}>Driver</Link>
              </li>
              }
              { role == 'shipper' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/driver"}>Shipments</Link>
              </li>
              }

            </ul>
          </div>
          </div>
      </nav>
  );
}
 
export default Navbar;