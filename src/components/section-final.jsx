import React from "react";
import "../styles/section-final.css";

import sampleImage from "../assets/images/photo.jpg"; // Reemplaza con tu imagen

export default function TwoColumnSection() {
    return (
        <section className="two-column-section">
        <div className="text-content">
            <h2 className="section-title">Ultima paleta de colores</h2>
            <p className="section-paragraph">
                Explicacion general de la paleta de colores o producto que se este ofertando 
                o mostrando, donde se puede colocar todos los detalles - Explicacion general 
                de la paleta de colores o producto que se este ofertando o mostrando, donde 
                se puede colocar todos los detalles - Explicacion general de la paleta de 
                colores o producto que se este ofertando o mostrando, donde se puede colocar 
                todos los detalles
            </p>
        </div>
        <div className="image-content">
            <img src={sampleImage} alt="Descripción" className="section-image" />
        </div>
        </section>
    );
}
