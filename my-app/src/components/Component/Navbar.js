import "./Navbar.css";

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
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
      </ul>
    </nav>
  );
}
