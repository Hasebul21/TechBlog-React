import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './CreateBlogs.css';
import React, { Component }  from 'react';
import axios from "axios";


function CreateBlog() {
        
        const navigate = useNavigate();
        const[title, setTitle]=useState("");
        const [description, setDescription] = useState("");
        const[jwtToken,setJwtToken]=useState("");
        
        useEffect(() => {
         
         let jwtToken =localStorage.getItem('token')||null;
         console.log(jwtToken);
         if(jwtToken===null) navigate("/");
         jwtToken=jwtToken.replaceAll('"', '');
         console.log("Cool" + jwtToken);
         setJwtToken(jwtToken);
           
       }, []);

        const postBlogHandler= async (e) => {
         e.preventDefault();
         await axios({
          method: "post",
          url: "http://localhost:8080/api/v1/stories/",
          data: {
             title: title,
             description: description,
          },
          headers : { Authorization: `Bearer ${jwtToken}` },
         })
        .then((response) => {
                alert("Sucessfully Created");
                navigate("/blogs");
        })
        .catch((err) => {
           alert("Unauthorized User. Please login first");
        });
        };

        return (
         
        <div className="ss-container">
        <label id="title-new">Title</label>
        <textarea type="text" rows="2" id="title-newbox" value={title}  onChange={(e) => setTitle(e.target.value)}></textarea>
        <br />
        <label id="des-new">Description</label>
                        <textarea type="text" rows="4" id="des-newbox" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
        <button id="button-new" value="submit" onClick={postBlogHandler}>Save</button>
        </div>

        );
}

export default CreateBlog;