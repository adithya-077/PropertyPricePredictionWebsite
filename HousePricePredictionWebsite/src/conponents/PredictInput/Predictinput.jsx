import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useUserAuth } from '../../context/logincontext';


import './Predictinput.css'

let Predictinput = () => {

    const [cookie , setcookie] = useCookies();
    const {userstate} = useUserAuth();

    const [data , changedata] = useState({
      locationLis:[]
    });
    const [formdata , changefdata] = useState({
      bhk:'', sqft:'', location:'',bath:''
    });

    const [predprice , changePrice] = useState(null);

    const url = 'http://localhost:7000/add-pred';

useEffect(()=>{
  fetch('http://127.0.0.1:8000/get/getlocation',{method:'GET',mode:'cors'}).then((res) => res.json()).then((data)=> changedata(data));
},[]);

function handleForm(e){
  e.preventDefault();
  const newdata = {...formdata}
  newdata[e.target.name] = e.target.value
  changefdata(newdata)
}


async function predictfun(e){
  e.preventDefault();
  var reqstr = 'http://127.0.0.1:8000/home/'
  reqstr = reqstr+ formdata['bhk'].toString()+'-'+formdata['sqft'].toString()+'-'+formdata['location'].toString()+'-'+formdata['bath'].toString();
  const res = await fetch(reqstr,{method:'GET',mode:'cors'})
  const data = await res.json()
  changePrice(data)
}

const loclist = data['loc']?.map(
  (e)=><option id={e} >{e}</option>
);

function savepred(e){
  e.preventDefault();
  
  if (predprice && cookie['email']!=='null'){
    // changesdata((data) => ({ ...data ,...formdata, email: "useremail", price: predprice.Price}))

    // savedata.email = 'useremail'
    // savedata.price = predprice.Price;
    // console.log(savedata)
    axios.post(url, {...formdata, email: cookie['email'], price: predprice.Price}).then((res)=>
    window.location.href='/PredictResults'
    
    ).catch((e)=>{
      console.log(e)
    })
  }
}

  return (

    <div className='main-area'>
      <div className='textinput-area'>
      <form >
        <div class='form-header'><h1 className='form-title'>ENTER DETAILS</h1></div>
        <div className='divider'></div>
        <input  type="text" placeholder='BHK' name='bhk' id='bhk' value={formdata.bhk } onChange={handleForm}/>
        <div className='divider'></div>
        <input  type="text" placeholder='Square Feet' name='sqft' id='sqft' value={formdata.sqft} onChange={handleForm}/>
        <div className='divider'></div>
        <input  type="text" placeholder='Bathrooms' name='bath' id='bath' value={formdata.bath}  onChange={handleForm}/>
        <div className='divider'></div>
        <select name='location' className='dropdown' value={formdata.location} onChange={handleForm}>
          {loclist}
        </select >
        <div className='divider'></div>
        <button className='login-button' onClick={predictfun}>Predict</button>
        <button className='login-button' onClick={savepred}>Save</button>
        {predprice && <p className='priceop'>{predprice.Price} Lakhs</p>}
        </form>
      </div>
      </div>
      ) 

}


export default Predictinput


