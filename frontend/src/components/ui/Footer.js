import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <Nav className='bg-primary' variant='light'>
      <div className='container-fluid text-center text-lg-left'>
        <div className='row'>
          <div className='col-md-6 mt-md-0 mt-3'>
            <h2 className='text-uppercase mt-3 ml-3'>
              <a href='/'>Serial Killers</a>
            </h2>
          </div>

          <hr className='clearfix w-100 d-md-none pb-3' />
          <div className='col-md-3 mb-md-0 mb-3'>
            <h5 className='text-uppercase mt-3 '>Psychology</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/whatis'>What Is a Serial killer?</a>
              </li>
              <li>
                <a href='/psychology'>Psychology of a Killer</a>
              </li>
              <li>
                <a href='/types'>Types of Serial Killers</a>
              </li>
              <li>
                <a href='/understanding'>Understanding Serial Killers</a>
              </li>
            </ul>
          </div>

          <div className='col-md-3 mb-md-0 mb-3'>
            <h5 className='text-uppercase mt-3 '>Unsolved</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/unsolved'>Top 10 Unsolved Mysteries</a>
              </li>
              <li>
                <a href='/explain'>No Explanation</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-copyright text-center py-3'>
          Made With 💜 © 2020
          <a href='mailto:samklepdev@gmail.com'> SbK </a>
        </div>
      </div>
    </Nav>
  )
}

export default Footer
