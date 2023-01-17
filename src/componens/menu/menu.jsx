import React, { useState } from 'react';
import './/menu.css';

const Menu = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Café Americano', price: 2.50 },
    { id: 2, name: 'Café Latte', price: 3.50 },
    { id: 3, name: 'Cappuccino', price: 4.00 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  return (
    <div>
      <h1>Menú</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Precio: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Añadir al carrito</button>
          </li>
        ))}
      </ul>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item =>
            (
<li key={item.id}>
<h3>{item.name}</h3>
<p>Precio: ${item.price}</p>
</li>
))}
</ul>
</div>
)
}

export default Menu;

