import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li className="menu-text">
          <IndexLink
            to="/"
            activeClassName="active-link"
          >Timer</IndexLink>
        </li>
        <li className="menu-text">
          <Link
            to="/a"
            activeClassName="active-link"
          >Countdown</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          Powered by <a href="https://www.ludobermejo.es">Ludo</a>
        </li>
      </ul>
    </div>
  </div>
);

module.exports = Nav;
