import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

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
            <Nav.Link href='/unsolved'>Unsolved</Nav.Link>
            <Nav.Link href='/psychology'>Psychology</Nav.Link>
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
