import React, { useState, useEffect } from "react";
import './menu.css';
import SweetAlert from "./SweetAlert";
import ShoppingCart from "./ShoppingCart";
import ProductCard from "./ProductCard";

function Goods({ goods }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProductForAlert, setSelectedProductForAlert] = useState(null);
  const [cartVisible, setCartVisible] = useState(false); 

  useEffect(() => {
    const items = cart.reduce((acc, item) => acc + item.quantity, 0);
    const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

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

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
              <div>
                {showAlert && <SweetAlert selectedProduct={selectedProductForAlert} setShowAlert={setShowAlert} />}
                {cartVisible && (
        <ShoppingCart
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          addMore={addMore}
          reduceItem={reduceItem}
          removeFromCart={removeFromCart}
        />
      )}
          
                <div className="products">
                  {goods.map((element) => (
                    <ProductCard
                      key={element.id}
                      {...element}
                      putInCart={putInCart}
                    />
                  ))}
                </div>
              </div>
            );
          }

export default Goods;