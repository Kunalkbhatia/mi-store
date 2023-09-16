import React from 'react'
import Offer from "./Offer.jsx";
import "../styles/Offers.css";

function Offers({offers}) {
  return (
    <div className='offers-section'>
      {
        offers.map((offer , index) => (
            <Offer offer={offer} key={index} />
        ))
      }
    </div>
  )
}

export default Offers
