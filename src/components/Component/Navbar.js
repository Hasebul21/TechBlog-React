import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from "./AuthContext";
import React, { Component }  from 'react';

export default function Navbar() {

  const navigate = useNavigate();
  const[jwtToken,setJwtToken]=useState(null);
  const { islogged, setLogStatus } = useContext(authcontext);  
  
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLogStatus(false);
    navigate("/");
  }

  useEffect(() => {
         
    let jwtToken =localStorage.getItem('token')||null;
    console.log(jwtToken);
    setJwtToken(jwtToken);
    //window.location.reload();
           
  }, [islogged]);

  return (
    <nav className="nav">
      <p>TECH WORLD WITH HASEB</p>
      <ul>
        {
          (jwtToken!=null)
          &&
          (<li><Link to="/logout" onClick={logout}>Logout</Link></li>)
        }
        {
            (jwtToken!=null)
            &&
            (<li><Link to="/blogs/new">CreateBlog</Link></li>)
        }
        {
          (jwtToken!=null)
          &&
          (<li><Link to="/user">UpdateProfile</Link></li>)
        }
        {
          (jwtToken==null)
          &&
          (<li><Link to="/signup">SignUp</Link></li>)
        }
        {
           (jwtToken==null)
           &&
           <li><Link to="/signin">SignIn</Link></li>
        }
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
