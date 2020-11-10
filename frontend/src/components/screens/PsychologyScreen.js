import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const PsychologyScreens = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Psychology of a Killer</h1>
        <p className='lead'>
          This is a simple attempt to understand the somewhat complicated nature
          of a serial killer.
        </p>
      </Jumbotron>
      <hr className='bg-secondary' />
      <Container className='d-flex mt-5'>
        <Row>
          <Col>
            <div>
              <p>
                The term ‘serial killer’ strikes fear deep into the hearts of
                most. However it is often thought that fear is what drives some
                curiosities, thus finding it appropriate to understand why
                serial killers commit horrific acts of violence repetitively. It
                has been found that many serial killers encompass similars
                emotional development issues. They also tend to be above-average
                intelligence wise, and in some ways it is as if killing acts as
                a drug for some of these men. Many theories of crime and
                deviance correlate to the actions of serial killers. Studies of
                known serial killers have unveiled similarities between them as
                early as infancy. Infancy, childhood and relationships with
                one’s mother are often among the key parallels of serial killers
                (Vronsky 2004).
              </p>
            </div>
          </Col>
          <Col>
            <Image
              fluid
              className='mt-5'
              alt='Ted Bundy - Serial Killer'
              src='https://cdn.vox-cdn.com/thumbor/hFJai9flUoMebs-ftbhlUUO1iVg=/0x0:1764x1200/1200x800/filters:focal(881x473:1163x755)/cdn.vox-cdn.com/uploads/chorus_image/image/52090637/cover.0.png'
            />
          </Col>
          <Col>
            <div>
              <p>
                Infancy is one of the most significant stages in the development
                of the human. Emotionally, infancy is crucial to the proper
                development of the adult personality (Vronsky 2004). The first
                twelve months are especially critical to the development of
                emotions such as remorse and affection. If a child does not
                receive adequate attention and physical touch during this time
                period they may suffer substantial personality disorders in the
                future (Canter 2005). In fact, there may be signs that the child
                has a psychopathic personality by the age of 2 (Vronsky 2004).
                The infant develops a sense of only itself. This is indicated by
                the absence of a range of emotions such as sympathy, remorse,
                and affection (Leyton 1987).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='mx-auto w-75 mt-5 mb-5'>
        <Row>
          <Col>
            <div>
              <p>
                Keeping in mind the idea that infant bonding is imperative to
                personality development, it is no surprise that a common
                characteristic of serial killers is that they were adopted
                (Leyton 1987). This may imply that as infants serial killers
                such as, David Berkowitz, Joel Rifkin, and Kenneth Bianchi did
                not receive proper attention as they were given up by their
                biological mothers for adoption during a vital period in their
                lives.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PsychologyScreens
