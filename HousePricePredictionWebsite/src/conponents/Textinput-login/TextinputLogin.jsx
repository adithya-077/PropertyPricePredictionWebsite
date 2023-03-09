import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./TextinputLogin.css";
import { useUserAuth } from "../../context/logincontext";

const url = "http://localhost:7000/signin";

function TextinputLogin() {
  const [Cookie, setCookie] = useCookies();
  const { setToken, inituser, userstate } = useUserAuth();
  let navi = useNavigate();
  const [userCred, setuserCred] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState(null);

  function handleF(e) {
    const newdata = { ...userCred };
    newdata[e.target.name] = e.target.value;
    setuserCred(newdata);
  }

  async function submit(e) {
    e.preventDefault();
    const res = await axios.post(url, userCred);
    seterror(null);
    setToken(res["data"]["token"]);
    inituser(res["data"]);
    setCookie("email", userCred.email, "/");
    console.log(Cookie['email']);
    navi("/");
  }

  useEffect(() => {}, []);

  return (
    <div className="textinput-area" onSubmit={(e) => submit(e)}>
      <form>
        <div className="header-input">
          <h1>LOGIN</h1>
        </div>

        <div className="divider"></div>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={userCred.email}
          onChange={handleF}
        />
        <div className="divider"></div>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={userCred.password}
          onChange={handleF}
        />
        <div className="divider"></div>
        <button className="login-button">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default TextinputLogin;
