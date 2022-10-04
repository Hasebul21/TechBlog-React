import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

export default function Navbar() {

  const navigate = useNavigate();
  const logout = (e) => {
      e.preventDefault();
      localStorage.clear();
      navigate("/");
  }
  return (
    <nav className="nav">
      <p>TECH WORLD WITH HASEB</p>
      <ul>
        <li>
          <Link to="/logout" onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to="/createblog">CreateBlog</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
