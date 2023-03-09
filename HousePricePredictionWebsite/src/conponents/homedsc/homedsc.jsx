import React from "react";
import image1 from '../../assests/undraw_house_searching_re_stk8.svg'
import image2 from '../../assests/undraw_projections_re_ulc6.svg'
import './homedsc.css'
import { Homepage } from '../../containers'; 
const Homedsc = () => {
  return (
    <div className="homedsc-main">
      <div className="part-1">
      <div className='page-title'><h1>Predict property prices like a pro.</h1></div>
      <Homepage title='Predict now'  />
      <div className='page-disc'><h3>plans to buy or sell a property? We help you to determine buying/selling price of a property and help customers find the right time to purchase or sell a property.</h3></div>  
      </div>
     <div className="image-div">
      <div className="textcol">      
      <div className="imgtext"><h1>An efficient machine learning model that dynamically predicts property's current market value based on certain features such as <br/><mark className="uniqueText">Location</mark>, <mark className="uniqueText">Bhk</mark>, <mark className="uniqueText">Square-Feet</mark>, <mark className="uniqueText">No.of bathroom</mark> , etc.</h1> 
      <img className="homepage-img" src={image1} alt='img1'></img>
      </div>
      <div className="imgtext">
      <img className="homepage-img" src={image2} alt='img2'></img>
        <h1>No one has a crystal ball and we can't be certain what the future holds for any investment asset. But with hours of research and a <mark className="uniqueText">good machine learning  algorithms  we can get closer to rough estimates of properties</mark>.<br/>
        
        ML model trained with labeled data sets, which allow the models to learn and grow more accurate over time if addition or new dataset are provided.</h1>
      </div>
      
      </div>
      
      
      
      </div> 
      
    </div>
  )
}

export default Homedsc

