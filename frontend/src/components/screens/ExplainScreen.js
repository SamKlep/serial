import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const ExplainScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-info'>Space Mysteries With No Explanation</h1>
        <p className='lead'>
          This is a simple attempt to understand the somewhat complicated nature
          of a serial killer.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Image
              className='mt-5'
              src='https://i.insider.com/5693db2edd0895ca1e8b461c?width=1300&format=jpeg&auto=webp'
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='display-4 mt-5 text-center'>
              It's no secret that space is full of mysteries.
            </p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p className='lead mt-5'>
              Our species has barely gone past our own planet's moon, and only
              one of our probes, Voyager 1, has even left the solar system. Much
              of what we've learned about deep space has been pieced together
              from falling objects and views from telescopes.
            </p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p className=''>
              Some of the famous (and chilling) space mysteries, like the face
              on Mars (it was shadows), or the black knight satellite "UFO"
              (it's satellite debris), have been solved.
            </p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p className=''>
              But space is rife with unexplained phenomena that put those two
              mere optical illusions to shame.
            </p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <p className=''>
              And some of the seven included in this slideshow could hold the
              key to understanding the universe.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-5'>Black holes</h3>
            <Image
              src='https://i.insider.com/56bd06dedd08957d4b8b4760?width=1300&format=jpeg&auto=webp'
              fluid
            />
          </Col>
          <Col>
            <p className='mt-5 ml-5 lead'>
              Black holes are the ultimate cosmic quicksand. They're formed when
              a giant star collapses, imploding into a tiny area of such intense
              gravity, even the surrounding light is sucked in.
            </p>
            <p className='mb-5 ml-5'>
              This means that although we've got a sense of how black holes
              work, we've still never actually seen one — they're invisible to
              telescopes that pick up electromagnetic radiation, light, or
              X-rays. We can only guess what they look like on the inside.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
    </div>
  )
}

export default ExplainScreen
