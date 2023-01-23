import React, { useState } from 'react';
import './Cart.css';

function Cart({onClose}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
    setTotal(total - product.price);
  };

  const handleCheckout = () => {
    // Open WhatsApp window with order summary and customer's contact information
    window.open(`https://wa.me/1234567890?text=Hi, I would like to order: ${cart.map(p => p.name).join(', ')} 
    Total: ${total}`);
    onClose();
  }

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.quantity * product.price}</td>
              <td>
                <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={3}>Total:</td>
                <td>{total}</td>
            </tr>
        </tfoot>
      </table>
      
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
export default Cart;