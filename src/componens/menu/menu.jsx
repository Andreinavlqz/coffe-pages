import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import products from './data';
import './menu.css'

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    }

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
    }

    const filteredProducts = products.filter((product) => {
        if (!selectedCategory) {
            return true;
        }
        return product.category === selectedCategory;
    });

    return (
        <div className="menu">
            <h1>Menú de la cafeteria</h1>
            <CategoryFilter 
                categories={["Café", "Té", "Pastelería", "Bebidas frías","Panaderia",]} 
                onFilterChange={handleFilterChange} 
            />
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
            
            <div className="contact-info">
                <h2>Información de contacto</h2>
                <p>Dirección: 123 Main St</p>
                <p>Teléfono: 555-555-5555</p>
                <p>Email: info@cafeteria.com</p>
            </div>
        </div>
    );
};

export default Menu;