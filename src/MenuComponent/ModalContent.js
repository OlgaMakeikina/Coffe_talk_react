

function ModalContent({ setIsOpen }) {

  return (
    <div className="modal_content">
     <p>A form for paying for the order should open here. However, this is not a real project, created for educational purposes.</p>
      <button className="close-cart-btn" onClick={() => setIsOpen(false)}>
        Close
      </button>
    </div>
  );
}

export default ModalContent;