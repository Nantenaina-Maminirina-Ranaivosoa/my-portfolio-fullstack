import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🌟 MonPortfolio</div>
      <ul className="navbar-links">
        <li><NavLink to="/" activeclassname="active">Accueil</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">À propos</NavLink></li>
        <li><NavLink to="/skills" activeclassname="active">Compétences</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projets</NavLink></li>
        <li><NavLink to="/cv" activeclassname="active">CV</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;