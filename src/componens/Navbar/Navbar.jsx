import React from 'react';
import { Link } from "react-router-dom";
import './/Navbar.css'

function Navbar() {
    return (
        <header>
            <div className="contenedor">
                <nav className="menu">
                    <Link to="/about" id="btn-acerca-de">Acerca de</Link>
                    <Link to="/menu" id="btn-menu">Menú</Link>
                    <Link to="/galery" id="btn-galeria">Galería</Link>
                    <Link to="/location" id="btn-ubicacion">Ubicación</Link>
                </nav>

                <div className="textos">
                    <h1 className="nombre">Café <span>Webpage</span></h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
            </div>
            </header>
    )
}

export default Navbar;