import {cardList} from './CardList';
import Card from './Card';
import React from 'react';
import './gallery.css';

function GalleryContent ({onCardClick}) {

  return (
    <main className="content">
<h2>PHOTO GALLERY</h2>
      <section className="gallery">
        <ul className="gallery__list">
          {cardList.map((item, ind) => (
            <Card
              key={item.id}
              card={item}
              ind={ind}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default GalleryContent;
