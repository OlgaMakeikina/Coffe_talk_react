import ModalContent from "./ModalContent";
import Modal from './Modal';
import { useState } from "react";
import cart from './MenuContent/cart.png';

function Buttons({items, setGoods, totalItems}) {
    const [isOpen, setIsOpen] = useState(false);

    const filteredGoods = searchTerm => {
    const filteredResult = [];
    items.forEach( item => {
        item.searchTerm.forEach(term => { 
             if (term === searchTerm) {
            filteredResult.push(item);
            setGoods(filteredResult);
        }
    })   
        })
    }
    
        return (<div className="cont">
    <button className="change" onClick = {() => setGoods(items)}>All</button> 
    <button className="change" onClick={() => filteredGoods("season")}>Seasonal</button>
    <button className="change" onClick = {() => filteredGoods("popular")}>Popular</button>
    <button className="change" onClick = {() => filteredGoods("coffee")}>Coffee</button>
    <button className="change" onClick= {() => filteredGoods ("bakery")}>Bakery</button>
    <button className="change" onClick={() => filteredGoods("ice")}>Ice drinks</button>
    <button className="change" onClick ={() => filteredGoods("other")}>Other</button>
    <div>
    <button className="cart-btn" onClick = { () => setIsOpen(true)}>
    <div className="cart-cont">
    <img className="cart-image" src={cart} alt="cart" width="30px" />
    {totalItems > 0 && <span className="quantity">{totalItems}</span>}
  </div>
        
        </button>
      {
        isOpen && 
        <Modal setIsOpen={setIsOpen}>
          <ModalContent setIsOpen={setIsOpen}/>
        </Modal>
}
      </div>
    </div>   
        )
    }
    
    export default Buttons;