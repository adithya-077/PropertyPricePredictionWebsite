import './Signup.css'

import React from 'react'
import { Navbar, Textinput } from '../../conponents'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='main-bg'>
      <Navbar/>
      <div className='content'>
      <Textinput/>
      <Link className='to-login' to={'/Login'}>Have an account?</Link>
      </div>
    </div>
  )
}

export default Signup
