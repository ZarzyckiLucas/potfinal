import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="" className="logo">
        Logo
      </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#aboutus-section">About</a>
        <a href="#end-team">Services</a>
        <a href="#contact-section">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
