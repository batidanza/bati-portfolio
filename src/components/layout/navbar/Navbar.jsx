import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        HOLOGRMA
      </Link>

      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <div className="navbar-center">
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item" onClick={handleItemClick}>
            <Link className="nav-link" to="/about">ABOUT</Link>
          </li>
          <li className="navbar-item" onClick={handleItemClick}>
            <Link  className="nav-link" to="/interactives-list">INTERACTIVES</Link>
          </li>
          <li className="navbar-item" onClick={handleItemClick}>
            <Link  className="nav-link" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
