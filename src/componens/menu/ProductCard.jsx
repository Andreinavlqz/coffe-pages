import React, { useState } from 'react';
import './menu.css'

const ProductCard = ({ name, price, image, category, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Categoria: {category}</p>
            <button onClick={() => onAddToCart({name, price, image, category})}>Agregar al carrito</button>
        </div>
    );
};

export default ProductCard;