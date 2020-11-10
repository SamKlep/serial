import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <h1 className='logo'>Serial Killers</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Psychology' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/whatis'>
                What Is a Serial killer?
              </NavDropdown.Item>
              <NavDropdown.Item href='/psychology'>
                Psychology of a Killer
              </NavDropdown.Item>
              <NavDropdown.Item href='/types'>
                Types of Serial Killers
              </NavDropdown.Item>
              <NavDropdown.Item href='/understanding'>
                Understanding Serial Killers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title='Unsolved' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/unsolved'>
                Top 10 Unsolved Mysteries
              </NavDropdown.Item>
              <NavDropdown.Item href='/explain'>
                No Explanation
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
