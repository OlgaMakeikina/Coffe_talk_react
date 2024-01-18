import React, { useState } from 'react'
import GalleryContent from './GalleryContent'
import Popup from './Popup'
import {cardList} from './CardList';


function Gallery() {
  const [selectedCard, setSelectedCard] = useState(null)
  
  const closePopup = () => {
    setSelectedCard(null)
  }

  const handleCardClick = (card, i) => {
    setSelectedCard(card)
    setInd(i)
  }

  const [ind, setInd] = useState(null)

  const handlePrevCard = () => {
    setSelectedCard(cardList[ind - 1])
    setInd(ind - 1)
  }

  const handleNextCard = () => {
    setSelectedCard(cardList[ind + 1])
    setInd(ind + 1)
  }

  return (
    <>


      <GalleryContent
        onCardClick={handleCardClick}
      >
      </GalleryContent>

      <Popup
        card={selectedCard}
        onClose={closePopup}
        prevCard={handlePrevCard}
        nextCard={handleNextCard}
      >
      </Popup>

    </>
  );
}

export default Gallery;