import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SerialListItem from '../serials/SerialListItem'

import '../../App.css'

const HomeContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/v1/serials`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading serials...</p>
  }

  return (
    <div className='container mt-3'>
      <h1>Serial Killers</h1>
      <p className='lead'>
        Enter the name of a fungus in question or filter by type
      </p>
      <br />
      <section className='cards'>
        {data.map((serial, _id) => (
          <SerialListItem key={_id} serial={serial} />
        ))}
      </section>
    </div>
  )
}

export default HomeContainer
