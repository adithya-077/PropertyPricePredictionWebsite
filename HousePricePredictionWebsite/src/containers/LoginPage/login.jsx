import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, TextinputLogin } from '../../conponents'

import './login.css'


const LoginPage = () => {
  return (
    <div className='Login-main'>
       <Navbar/>
       <div className='login-content'>
       <TextinputLogin/>
       <Link to={'/Signup'} className='to-signup'>Create an account.</Link>
       </div>

    </div>
  )
}

export default LoginPage
