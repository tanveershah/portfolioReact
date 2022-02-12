import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Tanveer Shah</h1>
      </div>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>

        <NavLink activeClassName="active" exact to="/portfolio">
          Portfolio
        </NavLink>

        <NavLink activeClassName="active" exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
