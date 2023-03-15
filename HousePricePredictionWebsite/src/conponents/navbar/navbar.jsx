import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/logincontext";

import './navbar.css'
const Navbar = () => {
  const {setToken,cookie,setemail} = useUserAuth()
function setTokenin(){
  setToken(null);
  setemail(null);
  window.location.reload(false);
  }
  return (
    <div className="navbar-main">
      <Link to='/' className="navbar-logo"><p>HP</p></Link>
      <div className="navbar-contents">
        <Link to='/PredictResults'  className="predict-nav"><p>Predict</p></Link>
        <Link to='/About' className="about-nav"><p>Hub</p></Link>
        {cookie['token']==='null' && <Link to='/Login' className="loginbutton-nav"><p>Login</p></Link>}
        {cookie['token']!=='null' && <button onClick={setTokenin} className='logout-button'>logout</button>}
      </div>
     </div>
  )
}

export default Navbar
