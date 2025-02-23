import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Function to collapse the navbar after a link is clicked (for mobile view)
  const collapseNavbar = () => {
    const navbarCollapse = document.getElementById('navbarTogglerDemo01');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="/" onClick={collapseNavbar}>
            QUICKDel
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
                onClick={collapseNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
                onClick={collapseNavbar}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
                onClick={collapseNavbar}
              >
                Contact US
              </NavLink>
            </li>
          </ul>
          <NavLink
            className="link-light bg-success p-2 me-2"
            to="/login"
            onClick={collapseNavbar}
          >
            Login
          </NavLink>
          <NavLink
            className="link-light bg-info p-2"
            to="/register"
            onClick={collapseNavbar}
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
