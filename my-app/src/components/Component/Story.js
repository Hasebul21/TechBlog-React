import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './story.css';
const axios = require("axios").default;

export default function Story() {
  const { storyId } = useParams();
  //const[id, setId]=useState("");
  const[title, setTitle]=useState("");
  const[description, setDescription]=useState("");
  const[author, setAuthor]=useState("");
  //const[date, setCreatedate]=useState("");

  useEffect(() => {
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
  return (
    <div className="story-container">
      <label id="auth-lab">Author : {author}</label>
      <br/>
      <label id="title-lab">Title</label>
      <textarea type="text" rows="2" id="title-box" value={title}  onChange={(e) => setTitle(e.target.value)}></textarea>
      <br />
      <label id="des-lab">Description</label>
      <textarea type="text" rows="4" id="des-box" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
      <button id="button-sav" value="submit">Save</button>
      <button id="button-del" value="submit">Delete</button>
    </div>
  );
}
