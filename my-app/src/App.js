import Blogs from "./components/AllBlogs/AllBlogs";
import SignUp from "./components/Registration/SignUp";
import SignIn from "./components/Login/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Component/Navbar";
import Story from "./components/Component/SingleStory";
import CreateBlog from "./components/CreateBlog/CreateBlog"
import { authcontext } from "./components/Component/AuthContext";
import { useState } from "react";
import React, { Component }  from 'react';

function App() {

  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <authcontext.Provider value={{ token, setToken }}>
    <Navbar/>
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/story/:storyId" element={<Story/>} />
        </Routes>
        </authcontext.Provider>
    </BrowserRouter>
  );
}

export default App;
