import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../user/context/UserContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle button clicked. isOpen:", isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        HOLOGRMA
      </Link>
      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <div className={`navbar-center ${isOpen ? "open" : ""}`}>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item" onClick={handleItemClick}>
            <Link className="nav-link" to="/magazine">
              MAGAZINE
            </Link>
          </li>
          <li className="navbar-item" onClick={handleItemClick}>
            <Link className="nav-link" to="/interactives-list">
              INTERACTIVES
            </Link>
          </li>
          {isLoggedIn() ? (
            <li className="navbar-item" onClick={handleItemClick}>
              <button className="logout-button" onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
          ) : (
            <li className="navbar-item" onClick={handleItemClick}>
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
