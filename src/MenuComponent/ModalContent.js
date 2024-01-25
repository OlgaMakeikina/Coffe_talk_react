

function ModalContent({ setIsOpen }) {

  return (
    <div className="modal_content">
      <h2>Shopping Cart</h2>
      {/* Use the values from the context */}
   
      <button className="close-cart-btn" onClick={() => setIsOpen(false)}>
        Close cart
      </button>
    </div>
  );
}

export default ModalContent;