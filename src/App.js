import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Footer from "./components/footer.jsx";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="containerAplicacion">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prueba_Tecnica" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
