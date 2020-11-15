import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const UnsolvedScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Top 10 Unsolved Mysteries</h1>
      </Jumbotron>
      <Container fluid>
        <Row className='text-center'>
          <Col>
            <Image
              style={{ height: '550px', width: '500px' }}
              fluid
              className='mx-auto mt-5'
              src='https://cdn.mos.cms.futurecdn.net/48KgZvQUJqk5Umf9oizJqd-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5'>
        <Row>
          <Col>
            <p className='lead text-center m-5'>
              There are some historical mysteries that may never be solved.
              Sometimes, that's because the relevant excavated material has been
              lost or an archaeological site has been destroyed. Other times,
              it's because new evidence is unlikely to come forward or the
              surviving evidence is too vague to lead scholars to a consensus.
              The lack of answers only makes these enigmas more intriguing.
              Let's take a look at 10 of these historical questions that may
              never have definitive explanations.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <hr className='bg-secondary' />
      <br />

      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>Who was Jack the Ripper?</h3>
            <Image
              fluid
              className='mx-auto mb-5'
              alt='Jack The Ripper'
              src='https://cdn.mos.cms.futurecdn.net/zonWmCmYFfXfWEdf7p9CQo-970-80.jpg.webp'
            />
          </Col>

          <Col className='text-center'>
            <p className='lead ml-5'>
              There are some historical mysteries that may never be solved.
              Sometimes, that's because the relevant excavated material has been
              lost or an archaeological site has been destroyed. Other times,
              it's because new evidence is unlikely to come forward or the
              surviving evidence is too vague to lead scholars to a consensus.
              The lack of answers only makes these enigmas more intriguing.
              Here, Live Science takes a look at 10 of these historical
              questions that may never have definitive explanations.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col className='text-center'>
            <h3 className='mb-4'>Where is Jimmy Hoffa?</h3>
            <p className='lead mr-5'>
              The teamster union leader known for his involvement in organized
              crime disappeared in Oakland County, Michigan, on July 30, 1975,
              and is now presumed to be dead. The identity of his killer(s) and
              the location of his body are ongoing mysteries. Police and
              forensic anthropologists have searched a number of sites in
              Detroit and Oakland County to no avail.
            </p>
            <p className='mr-5'>
              One popular theory was that Hoffa's body was buried beneath Giants
              Stadium in New Jersey. However, this theory has been debunked. The
              identity of his killer is also unclear. Before his death in 2006,
              Richard "The Iceman" Kuklinski, a hit man, claimed to have killed
              Hoffa and dumped his body in a scrap yard. An author named Philip
              Carlo visited Kuklinski in prison before he died and wrote a book
              on Kuklinski's confessions. After the book came out a number of
              police officers cast doubt on the confession in media interviews.
              As the years go by, it appears increasingly unlikely that Hoffa's
              remains will ever be found.
            </p>
          </Col>
          <Col lg={6}>
            <Image
              fluid
              className='mx-auto mt-5 mb-3'
              alt='Jimmy Hoffa'
              src='https://cdn.mos.cms.futurecdn.net/idUfMknHuX7npNxGQvuE3H-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>
      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>Where is Cleopatra's tomb?</h3>
            <Image
              fluid
              className='mx-auto mb-5'
              alt='The Tomb of Cleopatra'
              src='https://cdn.mos.cms.futurecdn.net/osinsvsEaUDLtBJND89VZQ-970-80.jpg.webp'
            />
          </Col>
          <Col>
            <p className='lead ml-5'>
              Ancient writers claim that Cleopatra VIIand her lover, Mark
              Antony, were buried together in a tomb after their deaths in 30
              B.C. The writer Plutarch (A.D. 45-120) wrote that the tomb was
              located near a temple of Isis, an Egyptian goddess, and was a
              "lofty and beautiful" monument containing treasures made of gold,
              silver, emeralds, pearls, ebony and ivory.
            </p>
            <p className='ml-5'>
              The location of the tomb remains a mystery. In 2010, Zahi Hawass,
              Egypt's former antiquities minister, conducted excavations at a
              site near Alexandria now called Taposiris Magna, which contains a
              number of tombs dating to the era when Cleopatra VII ruled Egypt.
              While many interesting archaeological discoveries were made,
              Cleopatra VII's tomb was not among them Hawass reported in a
              series of news releases. Archaeologists have noted that even if
              Cleopatra's tomb does survive to this day, it may be heavily
              plundered and unidentifiable.
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>Who killed JFK?</h3>
            <p className='lead mr-5'>
              This is probably the biggest mystery in American history that will
              never be resolved to everyone's satisfaction. On Nov. 22, 1963,
              President John F. Kennedy was shot in Dallas by Lee Harvey Oswald
              (although some speculate that he wasn't the only one shooting). On
              Nov. 24, 1963, before Oswald could stand trial, Oswald was fatally
              shot by nightclub owner Jack Ruby. Ruby died of lung cancer on
              Jan. 3, 1967.
            </p>
            <p className='lead mr-5'>
              The most widely accepted explanation is that Oswald killed JFK on
              his own and Ruby killed Oswald, on his own volition. Ruby's stated
              motivation was to spare Jacqueline Kennedy "the discomfiture of
              [Oswald] coming back to trial." However there are still a
              significant number of professional historians, along with many
              amateurs, who do not agree with this explanation and since JFK's
              death, numerous alternative explanationshave been brought forward
              by historians and amateurs. Given that significant new evidence is
              unlikely to appear, a firm consensus will probably never be
              reached.
            </p>
          </Col>
          <Col>
            <Image
              fluid
              className='ml-3 mt-5'
              alt='JFK'
              src='https://cdn.mos.cms.futurecdn.net/54yKP2YsDHTpu24ZQFefFX-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5'>
        <Row>
          <Col className='text-center'></Col>
        </Row>
      </Container>
      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>Is there a money pit on Oak Island?</h3>
            <p className='lead'>
              For more than two centuries, stories have circulated that Oak
              Island, located off Nova Scotia, Canada, held a money pit of
              buried treasure — supposedly left by the pirate Capt. William
              Kidd(1645-1701). Over that time, numerous expeditions costing
              millions of dollars have traveled to the island searching for the
              lost treasure, to no avail.
            </p>
            <p className='mb-5'>
              Despite centuries of searching no treasure has been found on Oak
              Island. Nevertheless that doesn't stop people from trying to find
              it. A History Channel show called the "Curse of Oak Island"
              follows a modern-day expedition; the show was just renewed for a
              fourth season in 2016.
            </p>
          </Col>
          <Col>
            <Image
              fluid
              className='ml-5 mb-5'
              alt='Oak Island'
              src='https://cdn.mos.cms.futurecdn.net/E74roC9jPJ9EsHf7JXajUZ-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>Is the Copper Scroll treasure real?</h3>
            <Image
              fluid
              style={{ height: '500px' }}
              className='mb-5'
              alt='Copper Scroll treasure'
              src='https://cdn.mos.cms.futurecdn.net/UqiPJqVY72djUbUGSo9Hha-970-80.jpg.webp'
            />
          </Col>
          <Col>
            <p className='lead'>
              Another treasure tale that will probably never be resolved is more
              ancient. In 1952 a copper scroll was found by archaeologists in a
              cave, along with other Dead Sea Scrolls, at the site of Qumran. As
              its name suggests, the writing was engraved onto a copper scroll.
              The scroll records a vast amount of hidden gold and silver
              treasure — so much, in fact, that some scholars believe that it is
              impossible for it to exist.
            </p>
            <p className='mb-5'>
              The scroll dates back more than 1,900 years to a time when the
              Roman Empire controlled the Qumran area. There were a number of
              revolts against Roman rule at the time the scroll was written, and
              scientists have hypothesized that the treasure was hidden to
              prevent its capture by Roman forces. Whether the treasure is real,
              where exactly it was hidden, whether it was ever found and whether
              it could still exist today are all mysteries that will likely
              never be solved.
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-4'>
              What's the fate of the Ark of the Covenant?
            </h3>
            <p className='lead mr-5'>
              In 587 B.C., a Babylonian army, under King Nebuchadnezzar II,
              conquered Jerusalem, sacking the city and destroying the First
              Temple, a building used by the Jewish people to worship god. The
              First Temple contained the Ark of the Covenant, which carried
              tablets recording the 10 Commandments.
            </p>
            <p className='mb-5 mr-5'>
              The fate of the Ark is unclear. Ancient sources indicate that the
              ark was either carried back to Babylonor hidden before the city
              was captured. It's also possible that the ark was destroyed during
              the city's sacking. In any event, the ark's location is unknown.
              Since the disappearance, a number of stories and legends about the
              ark's fate have been told. One story suggests the ark eventually
              made its way to Ethiopia, where it is kept today. Another story
              says the ark was divinely hidden and will not appear until a
              messiah arrives.
            </p>
          </Col>
          <Col>
            <Image
              fluid
              className='mx-auto'
              alt='Ark of the Covenant'
              src='https://cdn.mos.cms.futurecdn.net/48KgZvQUJqk5Umf9oizJqd-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6}>
            <h3 className='mb-5'>Were the Hanging Gardens of Babylon real?</h3>
            <Image
              fluid
              className='mx-auto'
              alt='Hanging Gardens of Babylon'
              src='https://cdn.mos.cms.futurecdn.net/UmLwd6ijMcVzYnemUG8CL8-970-80.jpg.webp'
            />
          </Col>
          <Col className='mt-5'>
            <p className='lead ml-5'>
              Ancient writers describe a fantastic series of gardens constructed
              at the ancient city of Babylonin modern-day Iraq. It's not clear
              when these gardens were built, but some ancient writers were so
              impressed by the gardens that they called them a "wonder of the
              world." Around 250 B.C., Philo of Byzantium wrote that the Hanging
              Gardens had "plants cultivated at a height above ground level, and
              the roots of the trees are embedded in an upper terrace rather
              than in the earth."
            </p>
            <p className='mb-5 ml-5'>
              So far, archaeologists who have excavated Babylon have been unable
              to find the remains of a garden that meets this description. This
              has left archaeologists with a question: Did the hanging gardens
              really exist? In ­2013, Stephanie Dalley, a researcher at the
              University of Oxford, proposed in a book that the gardens were
              actually located at the Assyrian city of Nineveh. Over the past
              two decades, both Babylon and Nineveh have suffered damage from
              wars and looting, and it seems unlikely that this mystery will
              ever be fully solved.
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={6} className=''>
            <h3 className='mb-4'>Is there a City of Atlantis?</h3>
            <p className='lead mr-5'>
              Writing in the fourth century B.C., the Greek philosopher Plato
              told a story of a land named Atlantisthat existed in the Atlantic
              Ocean and supposedly conquered much of Europe and Africa in
              prehistoric times. In the story, the prehistoric Athenians strike
              back against Atlantis in a conflict that ends with Atlantis
              vanishing beneath the waves.
            </p>
            <p className='mr-5'>
              While no serious scholar believes that this story is literally
              true, some have speculated that the legend could have been
              inspired, in part, by real events that happened in Greek history.
              One possibility is that the Minoan civilization(as it's now
              called), which flourished on the island of Crete until about 1400
              B.C., could have inspired the story of Atlantis. Although Crete is
              in the Mediterranean, and not the Atlantic, Minoan settlements
              suffered considerable damageduring the eruption of Thera, a
              volcano in Greece.
            </p>
            <p className='mr-5 mb-5'>
              Additionally, archaeologists found that the Minoans were
              eventually overcome (or forced to join with) a group of people
              called the Mycenaeans, who were based on mainland Greece. It's
              unlikely that this debate will ever be fully settled.
            </p>
          </Col>
          <Col>
            <Image
              fluid
              className='ml-5 mb-5'
              alt='City of Atlantis'
              src='https://cdn.mos.cms.futurecdn.net/EzTaDKQgHuE8xeRueSnHLH-970-80.jpg.webp'
            />
          </Col>
        </Row>
      </Container>

      <br />
      <hr className='bg-secondary' />
      <br />
      <Container fluid>
        <Row>
          <Col className='text-center'>
            <h3 className='mt-5 mb-5'>What was Jesus really like?</h3>
            <Image
              style={{ height: '600px', width: '550px' }}
              fluid
              className='mx-auto mb-5'
              alt='Jesus'
              src='https://cdn.mos.cms.futurecdn.net/J6BSikcXbhXSJCDLmvkMCf-970-80.jpg.webp'
            />
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className='lead'>
              The earliest surviving gospels date to the second century, almost
              100 years after the life of Jesus (although recently, it was
              announced that a possible first-century fragmenthad been found).
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className=''>
              The lack of surviving first-century texts about Jesus leave
              biblical scholars with a number of questions. When were the
              gospels written? How many of the stories actually took place? What
              was Jesus like in real life? Archaeological investigations of
              Nazareth, Jesus' hometown, reveal more about the environment where
              he grew up. More recently, scientists discovered a first-century
              housethat, centuries after Jesus' time, was venerated as being the
              house that Jesus grew up in, but whether it was actually Jesus'
              house is unknown.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className='mb-5'>
              Although new research will provide more insight, scholars think
              it's unlikely they will ever fully know what Jesus was really
              like.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UnsolvedScreen
