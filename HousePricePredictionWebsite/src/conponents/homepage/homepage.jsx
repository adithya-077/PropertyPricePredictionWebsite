import React from "react";
import { useNavigate } from "react-router-dom";

import "./homepage.css";

const Homepage = (props) => {
  let navi = useNavigate();
  return (
    <div className="homepage-main">
      <button className="predict-button" onClick={() => navi("/PredictResults")}>
        {props.title}
      </button>
    </div>
  );
};

export default Homepage;
