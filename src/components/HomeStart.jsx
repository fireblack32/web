import React from "react";
import "../styles/home.css";

export default function Home() {
    return (
    <div className="App">
        <header className="App-header">
            <div className="ContainerTextHome">
                <h1>POP IT!</h1>
                <h4>Descripción de esta pagina web - Descripción de esta pagina web - Descripción de esta pagina web</h4>
            </div>
            <div className="ContainerBtn">
                <button className="btn-home">
                    MAS INFORMACIÓN
                </button>
            </div>
        </header>
    </div>
)
}