import "./App.css";

import { Predictresults, LoginPage, About, Error } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Signup from "./containers/Signup/Signup";
import { LoginContextprovider, useUserAuth } from "./context/logincontext";
function App() {
  const { cookie } = useUserAuth();
  return (
    <LoginContextprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="PredictResults" element={<Predictresults />}></Route>
          <Route path="Login" element={<LoginPage />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </LoginContextprovider>
  );
}

export default App;
