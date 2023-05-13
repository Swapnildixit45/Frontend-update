import React, { useState, createContext, useEffect } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartItemsToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      saveCartItemsToLocalStorage(updatedCartItems);
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
      saveCartItemsToLocalStorage([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== productId)
    );
    saveCartItemsToLocalStorage(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, value) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + value } : item
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
    saveCartItemsToLocalStorage(cartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    saveCartItemsToLocalStorage([]);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + (item.price.value * item.quantity);
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
