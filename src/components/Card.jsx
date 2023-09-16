import React from 'react'
import "../styles/Card.css"

function Card({item}) {
  return (
    <div className='card'>
      <img className='image' src={item.image} alt="" />
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  )
}

export default Card
