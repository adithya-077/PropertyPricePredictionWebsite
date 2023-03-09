import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

import "../propertycard/Propertycard.css";

const Cardele = ({ ele }) => {
  return (
    <div className="each-card">
      <div className="details-div" id="title-card">
        <p className="card-title" id="locid">
          {ele.location}
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title" id="priceid">
          {ele.price} Lakhs
        </p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.bhk} Bhk</p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.bath} Bathrooms</p>
      </div>
      <div className="details-div" id="subtitle">
        <p className="card-title">{ele.sqft} Sq ft</p>
      </div>
    </div>
  );
};

const Propertycard = () => {
  const [cookie, setcookie] = useCookies();
  const [datas, savedatas] = useState([]);
  const url = "http://localhost:7000/getProduct";
  const fetchPred = async () => {
    const res = await axios.post(url, { email: cookie["email"] });
    savedatas(res.data);
    console.log(res);
  };

  useEffect(() => {
    fetchPred();
  }, []);

  const cards = datas.map((e) => <Cardele ele={e} key={e.id} />);

  return (
    <div className="cards-div">
      <div className="cards-container">{cards}</div>
    </div>
  );
};

export default Propertycard;
