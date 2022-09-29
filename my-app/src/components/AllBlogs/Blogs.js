import Card from "../Component/Card";
import { useEffect, useState } from "react";

const axios = require("axios").default;

function Blogs() {

  const [storyList, setStoryist] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        const res = await axios.get(`http://localhost:8080/api/v1/stories/`);
        setStoryist(res.data);
     };
     fetchData();
  }, []);

  return (
    <div>
      {storyList.map((story) => (
        <Card key={story.id} story={story} />
      ))}
    </div>
  );
}
export default Blogs;
