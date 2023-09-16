import React from 'react'
import "../styles/Offer.css";

function Offer({offer , key}) {
  return (
    <div className='image-section'>
      <a href={offer.url}>
        <img  src={offer.image} alt={`img number ${key}`}/>
      </a>
    </div>
  )
}

export default Offer
