import React from 'react'
import Thrill from '../serials/Thrill'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Card,
  Accordion,
  Button,
  ListGroup,
  Tab,
} from 'react-bootstrap'
import Mission from '../serials/Mission'
import Visionary from '../serials/Visionary'
import Power from '../serials/Power'

const TypesScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Types of Serial Killers</h1>
      </Jumbotron>
      <Container>
        <Row className='mt-5 mb-3'>
          <Col>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072627841/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/14_2aifq1susllww4scosok88s0g_783elejbp0kkw800soc4ssscw_th.jpg?height=233&width=269'
              fluid
            />
          </Col>
          <Col>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072718810/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/2191753_f520.jpg?height=233&width=269'
              fluid
            />
          </Col>
          <Col>
            <Image
              src='https://sites.google.com/site/psychologyofpsychopaths4a/_/rsrc/1324072760699/what-is-the-profile-of-a-serial-killer-1/what-are-the-different-types-of-serial-killers/Gaffney-serial-killer.jpg?height=199&width=306'
              fluid
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className='lead mb-5'>
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
      <hr className='bg-danger mt-5 mb-5' />
      <Container>
        <Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href='#link1'>
                  Thrill Seekers
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  Mission-Oriented
                </ListGroup.Item>
                <ListGroup.Item action href='#link3'>
                  Visionary Serial Killers
                </ListGroup.Item>
                <ListGroup.Item action href='#link4'>
                  Power and Control
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey='#link1'>
                  <Thrill />
                </Tab.Pane>
                <Tab.Pane eventKey='#link2'>
                  <Mission />
                </Tab.Pane>
                <Tab.Pane eventKey='#link3'>
                  <Visionary />
                </Tab.Pane>
                <Tab.Pane eventKey='#link4'>
                  <Power />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <hr className='bg-danger mt-5 mb-5' />
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
        <Row className='mb-5'>
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
