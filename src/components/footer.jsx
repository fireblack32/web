import React from "react";
import {
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaTiktok,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="containerFooter">
            <div className="footer-section about">
            <h4>Sobre nosotros</h4>
            <p>
                Prueba Tecnica para tutor de desarrollo web.
            </p>
            </div>

            <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
                <li>
                    <span>Cursos</span>
                </li>
                <li>
                    <span>Contacto</span>
                </li>
            </ul>
            </div>

            <div className="footer-section">
            <h4>Información de contacto</h4>
            <p>
                <FaPhone /> +57 (320) 779-7045
            </p>
            <p>
                <FaEnvelope /> jhondel1885@gmail.com
            </p>
            </div>

            <div className="footer-section social">
            <h4>Siguenos en</h4>
            <div className="social-icons">
                <FaInstagram />
                <FaTiktok />
            </div>
            </div>
        </div>
        <hr />
        <p className="copyright">© 2025 RealEstate Pro. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
