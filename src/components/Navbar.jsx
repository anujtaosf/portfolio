import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Anuhea Portfolio
        </Link>
        <div className="navbar-menu">
          <Link to="/" className={`navbar-link ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/projects" className={`navbar-link ${isActive('/projects')}`}>
            Projects
          </Link>
          <Link to="/work" className={`navbar-link ${isActive('/work')}`}>
            Work
          </Link>
          <Link to="/hobbies" className={`navbar-link ${isActive('/hobbies')}`}>
            Hobbies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
