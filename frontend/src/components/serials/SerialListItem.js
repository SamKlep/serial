import React from 'react'
import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const SerialListItem = ({ serial }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5'>
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
                <h4 className='serial-links'>{serial.alias}</h4>
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default SerialListItem
