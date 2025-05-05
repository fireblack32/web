import React from "react";
import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-left">
            <Link to="/Prueba_Tecnica" className="logo">
            <span className="logo-text">Prueba_Tecnica</span>
            </Link>
        </div>

        <ul className="navbar-menu">
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