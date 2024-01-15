import React, { useState } from "react";
import './menu.css';
import Swal from 'sweetalert2';
import Modal from './Modal/Modal';
import ModalContent from './Modal/ModalContent';

function Goods({ goods }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // количество товаров и общий прайс
  const updateCartTotals = () => {
    const items = cart.reduce((acc, item) => acc + item.quantity, 0);
    const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    setTotalItems(items);
    setTotalPrice(price);
  };

  const putInCart = (id) => {
    const selectedProduct = goods.find((product) => product.id === id);
    const isInCart = cart.some((item) => item.id === id);

    if (!isInCart) {
        setCart([...cart, { ...selectedProduct, quantity: 1 }]);
        updateCartTotals();
        console.log(`Added ${selectedProduct.name} to the cart.`);
      } else {
        Swal.fire({
          title: `${selectedProduct.name} is already in the cart`,
          confirmButtonText: 'OK',
          confirmButtonColor: '#38470B',
          background: '#F9F6F2',
          customClass: {
            confirmButton: 'custom-button',
            title: 'custom-title'
          }
        });
      }
    
    };

  const reduceItem = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    updateCartTotals();
  };

  const addMore = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    updateCartTotals();
  };

  return (
    <div>
      <div className="products">
        {goods.map((element) => {
          const { id, name, price, image } = element;
          return (
            <div key={id} className="product-card">
              <img className="product-img" src={image} alt="products" />
              <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: $ {price}</h4>
                <button onClick={() => reduceItem(id)}>&laquo;</button>
                <button onClick={() => putInCart(id)}>Add to cart</button>
                <button onClick={() => addMore(id)}>&raquo;</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick = { () => setIsOpen(true)}>Open Modal</button>
      {
        isOpen && 
        <Modal setIsOpen={setIsOpen}>
          <ModalContent setIsOpen={setIsOpen}/>
        </Modal>
}
      </div>
     
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: $ {totalPrice}</p>
      </div>
    </div>
  );
}

export default Goods;