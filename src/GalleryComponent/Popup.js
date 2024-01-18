import React from 'react'


function Popup (props) {
  const {card, onClose, prevCard, nextCard} = props

  return (
    <div className={`popup ${card && 'popup_opened'}`}>
      <button
        type="button"
        className="popup__prev"
        onClick={prevCard}
        >&laquo;</button>
      <button
        type="button"
        className="popup__next"
        onClick={nextCard}
        >&raquo;</button>
      <button
        type="button"
        className="popup__close-btn"
        onClick={onClose}
      >&times;
      </button>
      <div className="popup__container">
          <img
            className="popup__img"
            src={card ? card.link : ''}
            alt={card ? card.title : ''}
          />
        </div>
    </div>
  )
}

export default Popup;