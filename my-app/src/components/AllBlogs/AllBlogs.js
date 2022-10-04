import Card from "../Component/Card";
import { useEffect, useState , useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { Component }  from 'react';
import { authcontext } from "../Component/AuthContext";
import Navbar from "../Component/Navbar";

function Blogs() {

  const [storyList, setStoryList] = useState([]);
  const navigate = useNavigate();
  //const { token } = useContext(authcontext);

  useEffect(() => {

     const fetchData = async () => {
       const res = await axios.get(`http://localhost:8080/api/v1/stories/`);
        setStoryList(res.data);
     };
     fetchData();
  }, []);

  return (
    <>
    <div>
      {storyList.map((story) => (
        <Card key={story.id} story={story} />
      ))}
    </div>
    </>
  );
}
export default Blogs;
