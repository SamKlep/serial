import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const UnderstandingScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Understanding a Serial Killer</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={3}>
            <Image
              className='mb-3'
              src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-09/jeffrey_dahmer_milwaukee_police_1991_mugshot.jpg?itok=cGTAcGpu'
              fluid
            />
          </Col>
          <Col md={9}>
            <p className='lead'>
              Many serial killings seem to be completely devoid of meaning or
              motivation on the part of the criminal. In actuality, however,
              there is great diversity in the needs and desires of serial
              killers that lead them to extinguish the lives of others.
              Sometimes, the act or process of murder can be an end in itself
              for them.
            </p>
            <p>
              One aspect of popularly held beliefs and media stereotypes that
              often holds true is that most serial killers derive great
              satisfaction from the act of killing. The gratification they
              receive from the act of murder differentiates them from one-time
              murderers who kill incidentally—that is, to help commit or conceal
              another crime. Stated differently, serial killers have a chronic
              and overwhelming need to commit murder that distinguishes them
              from those who kill one time because it serves other criminal
              interests.{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              It may seem to be counterintuitive on the surface but many serial
              killers are actually insecure individuals who are compelled to
              kill due to a morbid fear of rejection. In many cases, the fear of
              rejection seems to result from having been abandoned by their
              mother in early childhood.
            </p>
            <p>
              Infamous serial killers who were rejected or abandoned by their
              birth mothers include David Berkowitz, Ted Bundy and Joel Rifkin.
              Some serial killers such as Edmund Kemper are tormented, abused
              and even tortured by their birth mothers.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='bg-danger mt-3 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col md={9} className='mb-3'>
            <p className='lead'>
              A neophyte serial killer who was traumatized as a child will seek
              to avoid painful relationships with other human beings as an
              adult. He will particularly seek to avoid painful relationships
              with those he desires or covets. Such fear of rejection may compel
              a fledgling serial killer to want to eliminate any objects of his
              affections. He may come to believe that by destroying the person
              he desires prior to entering into a relationship with them, he can
              eliminate the frightening possibility of being abandoned,
              humiliated or otherwise hurt by someone he loves, as he was in
              childhood.
            </p>
            <p>
              As explained by the FBI in a 2005 report on serial homicide, a
              serial killer selects victims based on availability, vulnerability
              and desirability (1).
            </p>
            <p>
              Availability is primarily determined by the lifestyle of the
              victim or circumstances in which he/she is involved that may
              provide the offender access for an attack. For example, a single
              female who regularly spends her evenings alone at home is
              available for a break-in attack by a serial predator.
            </p>
            <p>
              Vulnerability is defined as the extent to which the victim is
              at-risk or susceptible to attack by the offender. A single female
              walking down the street at night is less vulnerable to attack if
              she is accompanied by a large dog.
            </p>
          </Col>
          <Col md={3}>
            <Image
              className='mb-3'
              style={{ height: '500px' }}
              src='https://i.guim.co.uk/img/media/a56b1c56af6d82aa6cae629e709c94b11ff37334/0_0_1702_3000/master/1702.jpg?width=1225&quality=85&auto=format&fit=max&s=fdd0a2f7ba41da83269ef9177042cdc5'
              fluid
            />
          </Col>
        </Row>
        <hr className='bg-danger mt-3 mb-5' />
        <Row>
          <Col>
            <p>
              At a symposium on serial homicide in 2005, the FBI and other
              experts in criminology and forensic psychology had an in-depth
              discussion about the motivations of serial killers. The attendees
              made a number of observations and recommendations for serial
              homicide investigations that are related to the motivations of the
              killer.
            </p>
            <p>
              Availability is primarily determined by the lifestyle of the
              victim or circumstances in which he/she is involved that may
              provide the offender access for an attack. For example, a single
              female who regularly spends her evenings alone at home is
              available for a break-in attack by a serial predator.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UnderstandingScreen
