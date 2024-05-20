import React, { useState } from "react";
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
      <div className="navbar-title">HOLOGRMA</div>
      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <div className="navbar-center">
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item" onClick={handleItemClick}>HOME</li>
          <li className="navbar-item" onClick={handleItemClick}>ABOUT</li>
          <li className="navbar-item" onClick={handleItemClick}>SERVICES</li>
          <li className="navbar-item" onClick={handleItemClick}>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
