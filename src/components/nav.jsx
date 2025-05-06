import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
        <div className="navbar-left">
            <Link to="/Prueba_Tecnica" className="logo">
            <span className="logo-text">Prueba_Tecnica</span>
            </Link>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
            &#9776;
        </button>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li className="dropdown">
            <Link to="/Prueba_Tecnica">
                <FaBullhorn /> Inicio
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Prueba_Tecnica">
                <FaBullhorn /> Enseñanza python
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Prueba_Tecnica">
                <FaBullhorn /> Enseñanza web
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Prueba_Tecnica">
                <FaBullhorn /> Enseñanza Roblox
            </Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;
