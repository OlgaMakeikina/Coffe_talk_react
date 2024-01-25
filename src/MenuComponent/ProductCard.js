function ProductCard({ id, name, price, image, putInCart, viewCart }) {
    
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
            </div>
          </div>
        );
  
}

export default ProductCard;