function ProductCard({ id, name, price, image, putInCart, reduceItem, addMore, viewCart }) {
    
        return (
          <div key={id} className="product-card">
            <img className="product-img" src={image} alt="products" />
            <div className="overlay-btn">
              <button className="btn" onClick={() => putInCart(id)}>
                Add to cart
              </button>
              <button className="view-btn" onClick={viewCart}>View cart</button>
            </div>
            <div className="product-info">
              <h3>{name}</h3>
              <h4>$ {price.toFixed(2)}</h4>
              <button onClick={() => reduceItem(id)}>&laquo;</button>
              <button onClick={() => addMore(id)}>&raquo;</button>
            </div>
          </div>
        );
  
}

export default ProductCard;