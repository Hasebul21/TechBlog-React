import jwt from 'jwt-decode' ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const axios = require("axios").default;

function SignIn() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pass, Setpass] = useState("");
  const handleChange = (e) => {
    console.log("In handle event");
    if (e.target.name === "uname") {
      setUname(e.target.value);
    } else if (e.target.name === "pass") {
      Setpass(e.target.value);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(uname + " " + pass);
    await axios({
      method: "post",
      url: "http://localhost:8080/api/v1/signin",
      data: {
        email: uname,
        password: pass,
      },
      withCredentials: true,
    })
      .then((response) => {
       const token=response.data;
       const user=jwt(token);
       console.log(user);
       console.log(user.sub);
       alert("Successful "+user.sub);

      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  console.log(window.location);
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
            value={uname}
            required
            onChange={handleChange}
          />
          <br />
          <input
            id="pass"
            type="password"
            name="pass"
            placeholder="Enter Your password"
            value={pass}
            required
            onChange={handleChange}
          />
          <br />
          <button id="button1" value="submit">
            submit
          </button>
        </form>
        <h3 id="regis">Not a member yet? Register now</h3>
        <button
          id="button2"
          value="submit"
          onClick={() => {
            navigate("/signup");
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

export default SignIn;
