import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecrement = (productId) => {
    updateQuantity(productId, -1);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id}>
              <Row className='mb-3'>
                <img src={item.image} alt=' ' style={{ width: "20vh", height: "20vh" }}></img>
                <Col>
                  <h6>{item.title}</h6>
                  <p>Quantity: {item.quantity}</p>
                  <button className='btn btn-bg-transparent' onClick={() => handleDecrement(item.id)}>-</button>
                  <button className='btn btn-bg-transparent' onClick={() => handleIncrement(item.id)}>+</button>
                  <button className='btn' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <button type="button" class="btn btn-dark" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;