import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navmenu = () => (
  <header>
    <nav className="container d-flex-space">
      <div className="d-flex-space g-10">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-title">Space Traveler&#39;s Hub</h2>
      </div>
      <ul className="d-flex-space g-10">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        |
        <li><NavLink to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navmenu;
