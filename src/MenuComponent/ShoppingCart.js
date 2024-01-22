function ShoppingCart({ cart, totalItems, totalPrice }) {
return (
    <div className="cart">
<h2>Shopping Cart</h2>
<ul>
  {cart.map((item) => (
    <li key={item.id}>
      {item.name} - Quantity  : {item.quantity}
    </li>
  ))}
</ul>
<p>Total Items: {totalItems}</p>
<p>Total Price: $ {totalPrice}</p>
</div>
)

}
export default ShoppingCart;
