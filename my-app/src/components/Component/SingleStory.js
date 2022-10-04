import { useEffect, useState,useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './SingleStory.css';
import { authcontext } from "./AuthContext";
import jwt_decode from "jwt-decode";
import React, { Component }  from 'react';
import axios from "axios";

export default function Story() {
  const { storyId } = useParams();
  //const[id, setId]=useState("");
  const[title, setTitle]=useState("");
  const[description, setDescription]=useState("");
  const [author, setAuthor] = useState("");
  const[validAuthor,setValidAuth]=useState(null);
  const navigate = useNavigate();
  
  const { token } = useContext(authcontext);
  //const[date, setCreatedate]=useState("");
  
  useEffect(() => {

    const jwtToken =localStorage.getItem('token')||null;
    console.log(jwtToken);
    //if(jwtToken==null) navigate("/");
    console.log("Cool "+ jwtToken);

    if(jwtToken!=null){

       const user=jwt_decode(jwtToken);
       console.log(user.sub);
       setValidAuth(user.sub);

    }

    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8080/api/v1/stories/`+storyId);
      const story = res.data;
      console.log(story);
      //setId(story.id);
      setTitle(story.title);
      setDescription(story.description);
      setAuthor(story.author);
      //setCreatedate(story.createdDate);
    };
    fetchData();
  }, [storyId]);
  //console.log("Title : "+title);
  const updateHandler = async (e) => {
    e.preventDefault();
    await axios({
      method: "put",
      url: "http://localhost:8080/api/v1/stories/"+storyId,
      data: {
        title: title,
        description: description,
      },
      headers : { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      alert("Sucessfully Updated");
      navigate("/blogs");
    })
    .catch((err) => {
        alert(err.response.data.message);
    });
  };

  const deleteHandler= async (e) => {
  e.preventDefault();
  await axios({
      method: "delete",
      url: "http://localhost:8080/api/v1/stories/"+storyId,
      headers : { Authorization: `Bearer ${token}` },
  })
  .then((response) => {
    alert("Sucessfully Deleted");
    navigate("/blogs");
  })
  .catch((err) => {
        alert(err.response.data.message);
  });
  };

  return (
    <div className="story-container">
      <label id="auth-lab">Author : {author}</label>
      <br/>
      <label id="title-lab">Title</label>
      <textarea disabled={author!=validAuthor} type="text" rows="2" id="title-box" value={title}  onChange={(e) => setTitle(e.target.value)}></textarea>
      <br />
      <label id="des-lab">Description</label>
      <textarea disabled={author!=validAuthor} type="text" rows="4" id="des-box" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
      { (validAuthor==author) 
         && 
        (<button id="button-sav" value="submit" onClick={updateHandler}>Save</button>) 
      }
      {
         (validAuthor==author) 
          && 
         (<button id="button-del" value="submit" onClick={deleteHandler}>Delete</button>)
      }
    </div>
  );
}
