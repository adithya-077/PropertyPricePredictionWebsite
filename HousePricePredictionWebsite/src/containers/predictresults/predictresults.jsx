import React from "react";
import { Navbar, Predictinput, Propertycard } from "../../conponents";

import './predictresults.css'

 
 const Predictresults = () => {
   return (
    <div className= 'Pred-main'>
      <Navbar/>
      <div className="pred-content">
      <Predictinput/>
      <Propertycard/></div>

    </div>
   )
 }
 
 export default Predictresults
 