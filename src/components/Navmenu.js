import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navmenu = () => (
  <header>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="menu-lists">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        |
        <li><NavLink to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navmenu;
