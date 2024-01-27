import deleteItem from './MenuContent/delete.png';
import closeCart from './MenuContent/cancel.png';
import { useState } from 'react';
import ModalContent from './ModalContent';
import Modal from './Modal';

function ShoppingCart({ cart, totalItems, totalPrice, reduceItem, addMore, removeFromCart, resetCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [emptyCartMessage, setEmptyCartMessage] = useState('');

  const handleBuyClick = () => {
    if (cart.length === 0) {
      setEmptyCartMessage(
        <p style={{ color: '#38470B', fontWeight: 'bold' }}>
          Please add items before purchasing.
        </p>
      );
      setTimeout(() => {
        setEmptyCartMessage('');
      }, 5000);
    } else {
      setIsOpen(true);
      setEmptyCartMessage('');
    }
  };


  return (
    <div id="myCart" className="cart">
      <h2 className="header">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul>
          <li className="title-li">
            <div className="product-title">
              <p className="product-name">Name of Product</p>
              <div className="product-quantity"><p>Quantity</p></div>
              <div className="product-price"><p>Price</p></div>
            </div>
          </li>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <div className="item-image">
                  <img src={item.image} width="30px" alt={item.name} />
                </div>
                <div className="item-name">{item.name}</div>
                <div className="quantity-controls">
                  <button className="change-quantity" onClick={() => reduceItem(item.id)}>-</button>
                  {item.quantity}
                  <button className="change-quantity" onClick={() => addMore(item.id)}>+</button>
                </div>
                <div className="item-price">$ {(item.price * item.quantity).toFixed(2)}</div>
                <div className="delete-button">
                  <button className="deleteItem" onClick={() => removeFromCart(item.id)}>
                    <img src={deleteItem} width="15px" alt="delete" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          <li>
            <div>
              <p className="total">Total: <span className="totalItems">{totalItems}</span><span className="totalPrice">$ {totalPrice.toFixed(2)}</span></p>
            </div>
          </li>
        </ul>
      )}
      <button className="buy-btn" onClick={handleBuyClick}>
        Buy
      </button>
      {emptyCartMessage && <p className="empty-cart-message">{emptyCartMessage}</p>}
      {isOpen && 
        <Modal setIsOpen={setIsOpen}>
          <ModalContent setIsOpen={setIsOpen}/>
        </Modal>
      }

      <button className="closeCartButton" onClick={() => {
        setIsOpen(false);
        resetCart();
      }}>
        <img src={closeCart} width="25px" alt="close"/>
      </button>
    </div>
  )}

export default ShoppingCart;
