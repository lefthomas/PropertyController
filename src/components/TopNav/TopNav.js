import "./TopNav.css";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <div className="top-nav">
      <NavLink className="top-nav-active top-nav-btn" to="/">
        Transfer
      </NavLink>
      <NavLink className="top-nav-btn" to="/hold">
        Hold
      </NavLink>
      <NavLink className="top-nav-btn" to="/watch">
        Watch
      </NavLink>
      <NavLink className="top-nav-btn" to="/scan">
        Scan
      </NavLink>
    </div>
  );
}

export default TopNav;
