import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import cartIcon from '/src/assets/icons8-shopping-cart-24.png';
import Cart from '/src/componens/Carrito/Cart';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);

    return (
      
      <header>
      
        <div className="contenedor">
        <nav className="menu">
            <Link to="/AboutPage" id="btn-AboutPage">Acerca de</Link>
            <Link to="/Menu" id="btn-menu">Menú</Link>
            <Link to="/location" id="btn-location">Ubicación</Link>
            <Link to="#" onClick={() => setShowCart(!showCart)}>
                <img src={cartIcon} alt="Carrito de compras" className="cart-icon"/>
            </Link>
        </nav>
          <div className="textos">
				<h1 className="nombre">Mocca <span>Trufas y Cafe</span></h1>
        
			</div>
        </div>
        {showCart && <Cart onClose={() => setShowCart(false)} />}
      </header>
    );
};

export default Navbar;