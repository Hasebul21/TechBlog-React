import Blogs from "./components/AllBlogs/AllBlogs";
import SignUp from "./components/Registration/SignUp";
import SignIn from "./components/Login/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import updateuser from "./components/Component/updateuser";
import Navbar from "./components/Component/Navbar";
import Story from "./components/Component/SingleStory";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { authcontext } from "./components/Component/AuthContext";
import { useState } from "react";
import React, { Component }  from 'react';

function App() {

  const [islogged, setLogStatus] = useState(false);

  return (
    <BrowserRouter>
    <authcontext.Provider value={ {islogged , setLogStatus} }>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs/new" element={<CreateBlog />} />
          <Route path="/user" element={<updateuser />}/>
          <Route path="/story/:storyId" element={<Story/>} />
        </Routes>
      </authcontext.Provider>
    </BrowserRouter>
  );
}

export default App;
