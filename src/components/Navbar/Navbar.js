import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-top">
        <li className="nav-top__item nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-top__item nav-item">
          <NavLink to="/list">Iron Giphy List</NavLink>
        </li>
        <li className="nav-top__item nav-item">
          <NavLink to="/search">Search Giphy</NavLink>
        </li>
      </ul>
    </nav>
  );
}
