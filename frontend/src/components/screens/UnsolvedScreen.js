import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const UnsolvedScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center'>
        <h1 className='text-danger'>Unsolved Murders & Mysteries</h1>
        <p className='lead'>
          Everyday there are countless unsolved murders, mysteries and down
          right questionable attricities that never reach the light of day.
        </p>
      </Jumbotron>
    </div>
  )
}

export default UnsolvedScreen
