import React from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Card,
  Accordion,
  Button,
} from 'react-bootstrap'

const TypesScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Types of Serial Killers</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072627841/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/14_2aifq1susllww4scosok88s0g_783elejbp0kkw800soc4ssscw_th.jpg?height=233&width=269'
              fluid
            />
          </Col>
          <Col md={4}>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072718810/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/2191753_f520.jpg?height=233&width=269'
              fluid
            />
          </Col>
          <Col md={4}>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072760699/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/Gaffney-serial-killer.jpg?height=199&width=306'
              fluid
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p>
              Currently, there are four main types of serial killers listed,
              with many different subcategories listed under each. Depending on
              the nature of their crime, they are either categorized as
              organized or disorganized. Organized serial killers tend to be
              rather intelligent, usually having IQ scores ranging from 105 to
              120. Every detail of their crime is planned out well in advance,
              and the killer take every precaution to make sure they lerave no
              evidence behind to link them to a murder. It is not uncommon for
              this type of psychopath to watch potential victims for days to
              find someone they consider a good target. Disorganized serial
              killers, on the other hand, tend to have lower IQ scores than
              average, ranging from 80 to 95. These kind of killers rarely plan
              out their actions, and they appear to kill at random, usually
              people that happen to be at the wrong place at the wrong time.
              They usually do not take the extra precautions to cover up or
              remove any evidence of the crime, and they tend to travel from
              state to state, or even to other countries, to avoid being
              captured by the authorities.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                className='bg-warning'
                eventKey='0'>
                Thrill Seekers
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                Serial killers that see outsmarting the law as some sort of
                amusement. They enjoy attention from the media and they also
                enjoy being pursued by the police. They can be distinguished
                from other serial killers because of the fact that they send
                messages to others and they keep detailed records of their
                killings. Because of this, it is logical to say that most thrill
                seekers can be categorized as organized, but at the same time
                they do not always plan everything out in advance. For that,
                they are also seen as unorganized killers. Thrills seekers
                typically use weapons and/or rape their victims before killing
                them. After that, they hide the victim's corpse and they move on
                to their next victim, that is, unless of course they are caught
                in the act of doing so.{' '}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                className='bg-warning'
                eventKey='1'>
                Mission-Oriented
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                Serial killers are killers that feel that they are doing society
                a favor by ridding it of certain people; these can include young
                women, prostitutes, drug dealers, or homosexuals, people they
                feel that society could do without. These killers are generally
                not psychotic. Some see themselves as trying to change society.
                They always have a controlled crime scene, hence categorizing
                them as organized makes them much easier to track. However,
                since these killers always go after specific victims, this makes
                them much easier to track down.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                className='bg-warning'
                eventKey='2'>
                Visionary Serial Killers
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                People that occaisionally suffer from psychotic breaks from
                society. They sometimes believe they are another person, or they
                are compelled to murder by higher entities such as God or the
                Devil. In fact, the two most common subcategories for visionary
                serial killers are demon-mandated and God-mandated. David
                Berkowitz is an example of such a killer. He had claimed that a
                demon transmitted orders to him through his neighbor's dog that
                told him to kill. Since visionary killers tend to be more
                unorganized than other killers, they are very easy to track
                down.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant='link'
                className='bg-warning'
                eventKey='3'>
                Power and Control
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                Serial killers enjoy their victim's terror, suffering and
                screaming. These killers tend to be very organized and they
                usually have a history of childhood abuse, which left them
                feeling powerless and inadequete as adults. Many of these
                killers also sexually abuse their victims, but they are not
                motivated by feelings of lust. To them, rape is simply another
                form of dominating the victim.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
      <br />
      <br />
      <Container>
        <Row className='text-center'>
          <Col>
            <iframe
              src='https://www.youtube.com/embed/UKYi40A3q4A'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <p>
              Besides these four basic categories listed, there are also dozens
              of other subcategories that make serial killers unique based on
              their killing rituals and the nature of their crimes. For example,
              "black Widow" is the title given given to female serial killers,
              because it is known that a female black widow spider always kills
              and digests its mate after laying her eggs. There are also serial
              killers that kill another person after already killing someone
              else. These kind of serial killers are called "spree killers".
              "Lust killers" are serial killers that harm their victims largely
              for sexual arousal, and there are killers that form clubs that
              kill for sacrifice and acceptance into the group; these are called
              "group killers", but are more commonly refered to as cults. "Mass
              murderers" are serial killers that kill large groups of people at
              a time, killing with no specific targets in mind, but rather just
              to kill for their own enjoyment.
            </p>
          </Col>
          <Col>
            <p>
              Serial killlers can also keep mementos of their victims once they
              are dead. Robert Keppel, an American detective and law enforcement
              officer (now retired), placed these collections into two
              categories: souvenirs and trophies. Souvenirs are personal items
              which allow the killer to enjoy their memories of particular
              crimes they committed. These can be things such as jewelry, body
              parts, and other items pertaining to the victim. Trophies are
              objects that serial killers can make into a shrine, forming a
              collection of particular items from their past crimes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TypesScreen
