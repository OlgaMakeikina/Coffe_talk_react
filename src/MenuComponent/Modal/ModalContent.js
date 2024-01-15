const ModalContent = ({setIsOpen}) => {
    return (<div className="modal_content">
<p>YOUR CART</p>
<button onClick = { () => setIsOpen(false)}>Close cart</button>
    </div>)
}
export default ModalContent;