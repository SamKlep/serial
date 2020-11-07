import React from 'react'

// import { Link } from 'react-router-dom'

const FungusListItem = ({ serial }) => {
  return (
    <div className='card'>
      <div className='card-title'>{serial.name}</div>
      <div className='card-image'>
        <img src={serial.image} alt='serial' />
      </div>
      <div className='card-body'>{serial.description}</div>
    </div>
  )
}

export default FungusListItem
