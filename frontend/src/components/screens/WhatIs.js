import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const WhatIs = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>What is a Serial Killer?</h1>
      </Jumbotron>

      <Container className='mb-3'>
        <Row>
          <Col className='text-center'>
            <Image
              className='mb-5'
              style={{ height: '600px' }}
              src='https://images.unsplash.com/photo-1505457315458-62417e662cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
              fluid
            />
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col className='pb-3'>
            <p className='what-content lead'>
              A serial killer is typically a person who murders three or more
              people, usually in service of abnormal psychological
              gratification, with the murders taking place over more than a
              month and including a significant period of time between them.
              While most authorities set a threshold of three murders, others
              extend it to four or lessen it to two.
            </p>
          </Col>
        </Row>
        <hr className='bg-danger mt-3 mb-5' />
        <Row>
          <Col lg={6}>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Burke_Murdering_Margery_Campbell.jpg/480px-Burke_Murdering_Margery_Campbell.jpg'
              fluid
            />
          </Col>
          <Col>
            <p className='what-content lead mt-5'>
              Psychological gratification is the usual motive for serial
              killing, and most serial killings involve sexual contact with the
              victim, but the FBI states that the motives of serial killers can
              include anger, thrill-seeking, financial gain, and attention
              seeking. The murders may be attempted or completed in a similar
              fashion. The victims may have something in common, for example,
              demographic profile, appearance, gender or race.
            </p>
            <p className=''>
              Although a serial killer is a distinct classification that differs
              from that of a mass murderer, spree killer, or contract killer,
              there may be conceptual overlaps between them and some debate
              exists on specific qualifications, especially with regard to spree
              killers in comparison to serial killers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatIs
