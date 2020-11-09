import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

const SerialScreen = ({ match }) => {
  const [serial, setSerial] = useState({})

  useEffect(() => {
    const fetchSerials = async () => {
      const { data } = await axios.get(`/api/v1/serials/${match.params.id}`)

      console.log(data)
      setSerial(data)
    }

    fetchSerials()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Card>
        <Card.Img src={serial.image} alt={serial.name} />

        <Card.Body>
          <Card.Title as='div'>
            <strong>
              <h4>{serial.alias}</h4>
            </strong>
          </Card.Title>
          <h6>{serial.description}</h6>
        </Card.Body>
      </Card>
    </>
  )
}

export default SerialScreen
