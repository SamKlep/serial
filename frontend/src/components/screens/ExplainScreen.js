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
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h3 className='mb-5'>The Giant Void</h3>
            <p className='mt-5 mr-5 lead'>
              Unlike a black hole, the Giant Void isn’t a hole in space —
              instead, it’s curiously empty of both matter and dark matter. And
              also different from a black hole, light can pass through the void,
              though scientists believe it contains dark energy.
            </p>
            <p className='mb-5 mr-5'>
              It’s not the only void in space, either, although it is the
              largest, with an estimated diameter of 1.3 billion light years.
            </p>
          </Col>
          <Col lg={6}>
            <Image
              className='ml-5'
              src='https://i.insider.com/57891e6edd0895883e8b49b4?width=1300&format=jpeg&auto=webp'
              fluid
            />
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-5'>Dark Matter</h3>
            <Image
              className='mr-5'
              src='https://i.insider.com/56fbc4ecdd089570618b4a54?width=1300&format=jpeg&auto=webp'
              fluid
            />
          </Col>
          <Col>
            <p className='mt-5 ml-5 lead'>
              Dark matter is still a mystery, but we're relying on it to help
              explain some of the unknowns of our universe — cosmologists
              believe as much as 27% of the universe is dark matter.
            </p>
            <p className=' ml-5'>
              We're more certain of what dark matter isn't rather than what it
              is. It's not made of black holes (the light warping that they'd
              cause isn't present).
            </p>
            <p className=' ml-5'>
              One theory: the dark matter of the universe is made up of
              primordial black holes.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h3 className='mb-5'>Dark Energy</h3>
            <p className='mt-5 mr-5 lead'>
              In addition to the 27% of the universe that's believed to be dark
              matter, a lot more is in the form of dark energy, which makes up
              about 68% of everything around us (the "normal" matter we all know
              and love is only 5% of the universe).
            </p>
            <p className=' mr-5'>
              And like dark matter, we don't know much about dark energy, but
              the current hypothesis is that it's what's behind the increasing
              expansion of the universe (whereas dark matter slows it).
            </p>
            <p className=' mr-5 mb-5'>
              Much of our understanding of dark matter and energy comes from the
              Cosmic Microwave Background, a snapshot of thermal radiation
              "soon" (380,000 years) after the Big Bang, when hydrogen atoms
              were first formed.
            </p>
          </Col>
          <Col lg={6}>
            <Image
              className='ml-5'
              src='https://i.insider.com/57891e6edd0895883e8b49b5?width=1300&format=jpeg&auto=webp'
              fluid
            />
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-5'>The Great Attractor</h3>
            <Image
              className='mr-5'
              src='https://i.insider.com/57891e6edd0895883e8b49b6?width=1200&format=jpeg&auto=webp'
              fluid
            />
          </Col>
          <Col>
            <p className='mt-5 ml-5 lead'>
              There's something really attractive 220 million light years away,
              and it's dragging our whole galaxy towards it.
            </p>
            <p className=' ml-5'>
              Ever since the Big Bang, the entire universe has been expanding,
              so it makes sense that our galaxy would be moving. But not in the
              direction it's headed.
            </p>
            <p className=' ml-5'>
              The cluster pointed out above is a gravitational anomaly known as
              the Great Attractor, and its brightness is due to its
              gravitational attraction. Some point to dark matter as the cause
              of this. And others claim that our own galaxy, the Milky Way, is
              blocking our view of whatever it is that's pulling us towards it
              at 1.4 million mph.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h3 className='mb-5'>Saturn's mystery moon, "Peggy"</h3>
            <p className='mt-5 mr-5 lead'>
              For a brief moment, Saturn had a tiny, mysterious little moon,
              named Peggy.
            </p>
            <p className=' mr-5'>
              Back in 2013, NASA's Cassini took this snapshot of Saturn's rings,
              and caught a disturbance that astronomers believed was a new,
              little moon forming. The discovery shed light on how Saturn's 67
              other satellites developed.
            </p>
            <p className=' mr-5 mb-5'>
              Unfortunately, as NASA's Jet Propulsion Lab pointed out in a press
              release announcing the satellite, "the object is not expected to
              grow any larger, and may even be falling apart." Peggy's current
              status is unknown.
            </p>
          </Col>
          <Col lg={6}>
            <Image
              className='ml-5'
              src='https://i.insider.com/57891e6edd0895883e8b49b7?width=1200&format=jpeg&auto=webp'
              fluid
            />
          </Col>
        </Row>
      </Container>
      <hr className='bg-info mt-5 mb-5' />
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-5'>"Tabby's Star," KIC 8462852</h3>
            <Image
              className='mr-5'
              src='https://i.insider.com/57891e6edd0895883e8b49b8?width=1200&format=jpeg&auto=webp'
              fluid
            />
          </Col>
          <Col>
            <p className='mt-5 ml-5 lead'>
              The star KIC 8462852 doesn't just have a snappy, memorable name,
              it's also an unsolved anomaly 1,500 light years away.
            </p>
            <p className=' ml-5'>
              There's something big in the way of KIC 8462852, also known as
              "Tabby's Star." About 20% of the light the star emits is blocked
              from our vantage point. And it's probably not a planet — even one
              as large as Jupiter would only block 1% of a star the size of KIC
              8462852.
            </p>
            <p className=' ml-5 mb-5'>
              Some have suggested it's a Dyson Swarm, a less complete version of
              a megastructure known as a Dyson Sphere, which surrounds a star
              and harvests its energy output. We'll probably get a better idea
              of what's going on with the star when NASA launches the James Webb
              Space Telescope in 2018, but until then, "unknown alien
              megastructure" sounds like a pretty cool explanation.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ExplainScreen
