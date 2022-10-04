import jwt from 'jwt-decode' ;
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { authcontext } from '../Component/AuthContext';
import React, { Component }  from 'react';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { islogged , setLogStatus  } = useContext(authcontext);

  useEffect(() => {
  
    let jwtToken =localStorage.getItem('token')||null;
    console.log("In signup "+jwtToken);
    if(jwtToken!=null) {
      navigate("/");
    }
  },[]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:8080/api/v1/signin",
      data: {
        email: email,
        password: password,
      },
    })
    .then((response) => {
      const token = response.data;
      //setToken(token);
      localStorage.setItem('token', token);
      console.log(token);
      setLogStatus(true);
      navigate("/");

    })
    .catch((err) => {
        alert(err.response.data.message);
    });
  };
  return (
    <div>
      <div className="login_box">
        <form id="form" onSubmit={submitHandler}>
          <h2 id="heading">Welcome back Anonymous</h2>
          <input
            id="username"
            type="text"
            name="uname"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            id="pass"
            type="password"
            name="pass"
            placeholder="Enter Your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button id="button1" value="submit" onClick="window.location.reload()">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
