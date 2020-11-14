import React from 'react'
import { Jumbotron, Card, Container, Row, Col, Image } from 'react-bootstrap'

const WhatIs = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>What is a Serial Killer?</h1>
      </Jumbotron>

      <Container className='mb-3'>
        <Row>
          <Col lg={6} className='pb-3'>
            <Card>
              <Card.Text>
                <p className='what-content lead p-5'>
                  A serial killer is typically a person who murders three or
                  more people, usually in service of abnormal psychological
                  gratification, with the murders taking place over more than a
                  month and including a significant period of time between them.
                  While most authorities set a threshold of three murders,
                  others extend it to four or lessen it to two.
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Text>
                <p className='what-content lead p-4'>
                  Psychological gratification is the usual motive for serial
                  killing, and most serial killings involve sexual contact with
                  the victim, but the FBI states that the motives of serial
                  killers can include anger, thrill-seeking, financial gain, and
                  attention seeking. The murders may be attempted or completed
                  in a similar fashion. The victims may have something in
                  common, for example, demographic profile, appearance, gender
                  or race.
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6} className='pb-3'>
            <Card>
              {' '}
              <Card.Text>
                <p className='lead p-5'>
                  Although a serial killer is a distinct classification that
                  differs from that of a mass murderer, spree killer, or
                  contract killer, there may be conceptual overlaps between them
                  and some debate exists on specific qualifications, especially
                  with regard to spree killers in comparison to serial killers.
                </p>
              </Card.Text>
            </Card>
          </Col>

          <Col lg={6}>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Burke_Murdering_Margery_Campbell.jpg/480px-Burke_Murdering_Margery_Campbell.jpg'
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatIs
