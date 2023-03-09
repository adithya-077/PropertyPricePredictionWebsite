import axios  from "axios";
import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import'./Textinput.css'


const Textinput = () => {
  let navi = useNavigate();
  const url = 'http://localhost:7000/signup'
    const [user , setUser] = useState({
       
    });
    const [error , seterror] = useState(null);
    

    const handleInput = (e)=>{
      const newdata = {...user}
      newdata[e.target.name] = e.target.value
      setUser(newdata)
      console.log(newdata)
    }

    function submit(e){
      e.preventDefault();
      axios.post(url,user)
      .then(res=>{
        console.log(res.statusText);
        seterror(null);
        navi('/Login')
        
      }).catch(res=>{
        seterror(res['response']['data']['msg']);
      })
    }


  return (
    <div className='textinput-area'>
      <form className='registration-from' onSubmit={(e)=> submit(e)}>
        <div className="header-input"><h1>SIGN UP</h1></div>
        <div className='divider'></div>
        <input type="text" placeholder='Enter First name' name='Fname' id='Fname' value={user.Fname} onChange={handleInput} />
        <div className='divider'></div>
        <input type="text" placeholder='Enter Last name' name='Lname' id='Lname' value={user.Lname} onChange={handleInput}/>
        <div className='divider'></div>
        <input type="text" placeholder='Enter Email' name='email' id='email' value={user.email} onChange={handleInput}/>
        <div className='divider'></div>
        <input type="text" placeholder='Enter Password' name='password' id='password' value={user.password} onChange={handleInput} />
        <div className='divider'></div>
        <input type="text" placeholder='Enter Moblie number' name='mobileno' id='mobileno' value={user.mobileno} onChange={handleInput}/>
        <div className='divider'></div>
        <input type="date" placeholder='Enter DOB' name='dob' id='dob' value={user.dob} onChange={handleInput} />
        <div className='divider'></div>
        <button className='login-button'>Create</button>
        {error && <p>{error}</p>}


      </form>
    </div>
  )
}

export default Textinput
