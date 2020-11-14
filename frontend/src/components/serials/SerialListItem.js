import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const SerialListItem = ({ serial }) => {
  return (
    <Card>
      <Link to={`/serials/${serial._id}`}>
        <Card.Img
          className='card-img-top'
          src={serial.image}
          alt='serial'
          fluid
        />
      </Link>
      <Card.Body>
        <Link to={`/serials/${serial._id}`}>
          <Card.Title as='div'>
            <strong>
              <h4>{serial.alias}</h4>
            </strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SerialListItem
