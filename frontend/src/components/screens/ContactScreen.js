import React from 'react'
import { Jumbotron, Form, Button, Container } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Contact</h1>
        <p className='lead'>
          Send any unsolved cases, crimes, mysteries, UFOs and/or questionable
          happenings that are not present on this site to the email address
          below. This will be an ever changing and growing list.
        </p>
      </Jumbotron>
      <Container className='w-75'>
        <Form>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Subject</Form.Label>
            <Form.Control as='select'>
              <option>Serial Killers</option>
              <option>Psychology</option>
              <option>Unsolved</option>
              <option>Just Saying Hi</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button>Send</Button>
        </Form>
      </Container>
    </div>
  )
}

export default ContactScreen
