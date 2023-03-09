import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useUserAuth } from "../../context/logincontext";

import "../budgetmeter/Propertycardbudget.css";

const Cardele = ({ ele }) => {
  const { budget, setbudget } = useUserAuth();
  return (
    <div className="each-cardpb">
      <div
        className="details-div"
        id="title-card"
        style={{
          background: budget <= ele.price * 100000 ? "red" : "green",
        }}
      >
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

const Propertycardbudget = () => {
  const [cookie, setcookie] = useCookies();
  const [datas, savedatas] = useState([]);
  const url = "http://localhost:7000/getProduct";
  const fetchPred = async () => {
    const res = await axios.post(url, { email: cookie["email"] });
    savedatas(res.data);
  };

  useEffect(() => {
    fetchPred();
  }, []);

  const cards = datas.map((e) => <Cardele ele={e} key={e.id} />);

  return (
    <div className="cards-divpb">
      <div className="legends">
        <div className="lg">
          <div className="icon1"></div>
          <div className="divi"></div>
          <div className="dsc1">Green under budget</div>
        </div>
        <div className="lg">
          <div className="icon2"></div>
          <div className="divi"></div>
          <div className="dsc2">Red over budget</div>
        </div>
      </div>
      <div className="cards-container">{cards}</div>
    </div>
  );
};

export default Propertycardbudget;
