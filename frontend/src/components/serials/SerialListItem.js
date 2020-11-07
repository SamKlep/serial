import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const FungusListItem = ({ serial }) => {
  return (
    <Card>
      <Link to={`/serials/${serial._id}`}>
        <Card.Img src={serial.image} alt='serial' />
      </Link>
      <Card.Body>
        <Link to={`/serials/${serial._id}`}>
          <Card.Title as='div'>
            <strong>{serial.alias}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>{serial.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FungusListItem
