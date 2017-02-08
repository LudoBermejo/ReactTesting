import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li>
          <IndexLink
            to="/"
            activeClassName="active-link"
          >Timer</IndexLink>
        </li>
        <li>
          <Link
            to="/countdown"
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
