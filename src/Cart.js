import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
                <img src={item.image}></img>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart
