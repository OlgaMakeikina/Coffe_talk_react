import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProductForAlert, setSelectedProductForAlert] = useState(null);
  const [cartVisible, setCartVisible] = useState(false); 

  const putInCart = (id) => {
    const selectedProduct = goods.find((product) => product.id === id);
    const isInCart = cart.some((item) => item.id === id);
    if (!isInCart) {
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
      setCartVisible(true); // Show the cart when a product is added
    } else {
      setShowAlert(true);
      setSelectedProductForAlert(selectedProduct);
    }
  };
  

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const reduceItem = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const addMore = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const contextValue = {
    cart,
    totalItems,
    totalPrice,
    putInCart,
    removeFromCart,
    reduceItem,
    addMore,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};