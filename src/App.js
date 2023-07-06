import "./App.css";
import Signup from "./components/Singup";
import Nopage from "./components/Nopage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Header from "./components/Header";
import Edit from "./components/Edit";
import { ThemeProvider, mycontext } from "./context/ThemeContext";

import { useContext,useEffect } from "react";


function App() {
  const { isLoggedIn,setLocaldata,localdata} = useContext(mycontext);

  useEffect(() => {
    setLocaldata(JSON.parse(localStorage.getItem("data")) || []);
  }, []);
  


  
  return (
    <>
     <BrowserRouter>
    
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Dashboard  />
              ) : (
                <Signup  />
              )
            }
          />
          <Route
            path="/singup"
            element={<Signup  />}
          />

          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Dashboard  />
            }
          />
          <Route
            path="edit"
            element={<Edit  />}
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
