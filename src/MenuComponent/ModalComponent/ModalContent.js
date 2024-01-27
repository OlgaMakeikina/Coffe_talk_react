import'./modal.css'

function ModalContent({ setIsOpen }) {

  return (
    <div className="modal-content">
     <p className="modal-text">A form for paying for the order should open here. However, this is not a real project, created only for educational purposes.</p>
      <button className="close-modal" onClick={() => setIsOpen(false)}>
        Close
      </button>
    </div>
  );
}

export default ModalContent;