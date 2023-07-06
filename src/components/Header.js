import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mycontext } from "../context/ThemeContext";


const Header = () => {
  const {getloginin,setIsLoggedIn,isLoggedIn} =useContext(mycontext);
  const navigator = useNavigate();
 
  const isLoggedOut = () =>{
    localStorage.removeItem('userlogin');
    navigator("/login");
    setIsLoggedIn(false);
  }
  const AddUser = () =>{
    navigator("singup")
  }
  return (
    <>
    <div className="w-100">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <div className="">
          <h1 style={{"fontSize":"1.3rem"}}>UseContext</h1>
        </div>
        <div className="text-right">
          {isLoggedIn ? (<>
            
            <button
            type="button"
            className="btn btn-outline-primary flex-grow-1 mr-lg-2 mr-1"
            onClick={()=>AddUser()}
          > Add User
          </button>
          <button
             type="button"
             className="btn btn-outline-danger flex-grow-1 "
             onClick={()=>isLoggedOut()}
           > LogOut
           </button>
          </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/" className="ml-3">
                Register
              </Link>
            </>
          )}
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
