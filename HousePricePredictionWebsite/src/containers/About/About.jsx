import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar, Propertycard } from "../../conponents";
import Propertycardbudget from "../../conponents/budgetmeter/Propertycardbudget";
import Pricegraph from "../../conponents/pricegraph/pricegraph";
import { useUserAuth } from "../../context/logincontext";

import "./About.css";

const About = () => {
  const { budget, setbudget } = useUserAuth();
  function handleB(e) {
    setbudget(e.target.value);
  }
  const [propdetails, setpropdetails] = useState({});
  const [Cookie, setCookie] = useCookies();

  async function loaddetails() {
    const resfianl = await fetch("http://localhost:7000/getdetailssaved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: Cookie["email"] }),
    });
    const data = await resfianl.json();
    setpropdetails(data);
  }
  useEffect(() => {
    loaddetails();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="maindiv-about">
        <div className="About-main">
          <input
            value={budget}
            onChange={(e) => {
              handleB(e);
            }}
            placeholder="Enter budget"
          ></input>
          <div className="main-hub">
            <Propertycardbudget />
            <div className="budgettext">
              <h4 className="budgetheading">
                Are you tired of scrolling through endless pages of estimates,
                only to find that they're outside of your budget? We understand
                how frustrating it can be to search for estimates that fit your
                budget.
              </h4>
              <h4 className="budgetheading2">
              Our budget filter feature allows you to easily find estimates within your desired price range. 
              Simply select your budget range, and our website will display estimates that fall within that range.
              We understand that everyone's budget is different, which is why we've designed our budget filter feature to be flexible and customizable.
              </h4>
              <h4 className="budgetheading2">
              Whether you're on a tight budget or have a little more to spend, you'll be able to find exactly what you're looking for without having to waste time browsing through estimates that are outside of your budget.
              So why waste time sifting through estimates that are outside of your budget? Use our budget filter feature today to find the estimates you need, quickly and easily.
              The saved estimates are flaged green or red depending upon the budget , red indicates that the estimates are over the budget and green indicates its a safe option.
              </h4>
            </div>
          </div>
        </div>
        <div className="graph">
          {propdetails.allLocCount && (
            <Pricegraph data={propdetails}></Pricegraph>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
