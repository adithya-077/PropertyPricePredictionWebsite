import React from 'react'
import { Navbar } from '../../conponents'

import './Error.css'
const Error = () => {
  return (
    <div className='Error-main'>
      <Navbar/>
      <h1 className='heading-error'>404 Page not found.</h1>
    </div>
  )
}

export default Error
