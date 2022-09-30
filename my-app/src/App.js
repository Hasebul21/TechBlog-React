import Blogs from "./components/AllBlogs/Blogs";
import SignUp from "./components/Registration/SignUp";
import SignIn from "./components/Login/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Component/Navbar";
import Story from "./components/Component/Story";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/story/:storyId" element={<Story/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
