import React from "react";
import "../styles/products.css";
import img1 from "../assets/images/square.png";
import img2 from "../assets/images/amongus.png";
import img3 from "../assets/images/round.png";

export default function InfoSection() {
    const items = [
        { id: 1, name: "Paleta de colores cuadrada", image: img1 },
        { id: 2, name: "Among Us ", image: img2 },
        { id: 3, name: "Paleta de colores redonda", image: img3 },
    ];

    return (
        <section className="info-section">
        <h2 className="section-title">Aquí pueden haber productos</h2>
        <div className="card-container">
            {items.map((item) => (
            <div key={item.id} className="info-card">
                <img src={item.image} alt={item.name} className="card-image" />
                <h3 className="card-name">{item.name}</h3>
                <button className="info-button">Más información</button>
            </div>
            ))}
        </div>
        </section>
    );
}
