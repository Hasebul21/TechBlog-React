import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <p>TECH WORLD WITH HASEB</p>
      <ul>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li>
          <a href="/createblog">CreateBlog</a>
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
