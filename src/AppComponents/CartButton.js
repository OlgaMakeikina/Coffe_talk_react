import React, { useState, useEffect } from 'react';
import cart from '../MenuComponent/MenuContent/cart.png';

const CartButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCartClick = () => {
    // Обработка нажатия на кнопку корзины
    // Например, открытие модального окна с содержимым корзины
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`cart-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleCartClick}
    >
      <img src={cart} alt="cart" width="30px" />
    </button>
  );
};

export default CartButton;