import React from "react";

import './footer.css'


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-row">
        <div className="row-1">
            <h2>PRIVACY POLICY</h2>
            <h2>TERMS AND CONDITIONS</h2>
            <h2>ABOUT</h2>
        </div>
        <div className="row2">
            <h2>CONTACT</h2>
            <h3 className="ultext">Example123@gmail.com</h3>
            <h3 className="ultext">91-2442050612</h3>
            <h3>308 Negra Arroyo Lane,<br/> Albuquerque,<br/> New Mexico. 87104.</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
