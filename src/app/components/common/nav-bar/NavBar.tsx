import {Link} from "react-router-dom";
import * as React from "react";
import './NavBar.scss';

const navBar = () => {
  return (
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid row">
          <div className="navbar-header col-2">
            <Link to="/">Home</Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/test">Test</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/surprise">Surprise Me!!!</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default navBar();

