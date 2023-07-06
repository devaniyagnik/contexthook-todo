
import React, { useState } from 'react';

export const mycontext = React.createContext();

export const ThemeProvider = ({ children }) => {
 const [isLoggedIn, setIsLoggedIn] = useState((JSON.parse(localStorage.getItem("userlogin"))?.length > 0 ) ? true : false);
 const [logindata,setLogindata] = useState(JSON.parse(localStorage.getItem("userlogin")) || [])
  const [localdata, setLocaldata] = useState([]);

 
  return (
    <mycontext.Provider value={{isLoggedIn,setLogindata ,logindata, setIsLoggedIn ,localdata,setLocaldata}}>
      {children}
    </mycontext.Provider>
  );
}
