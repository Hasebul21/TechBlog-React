import React from "react";
import "./Card.css";
function Card(props) {
  const data = props.story;
  return (
    <div className="card">
      <div className="container">
        <h3 id="story_id">Id : {data.id}</h3>
        <h3 id="story_title">Title : {data.title}</h3>
        <h4 id="story_author">Author : {data.author}</h4>
        <h4 id="story_date">CreatedDate : {data.createdDate}</h4>
        <h4 id="story_body">Body : {data.description}</h4>
      </div>
      <br />
    </div>
  );
}

export default Card;
