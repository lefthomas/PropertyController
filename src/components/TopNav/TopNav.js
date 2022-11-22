import "./TopNav.css";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="top-nav">
      <Link className="top-nav-active top-nav-btn" to="/">
        Transfer
      </Link>
      <Link className="top-nav-btn" to="/hold">
        Hold
      </Link>
      <Link className="top-nav-btn" to="/watch">
        Watch
      </Link>
      <Link className="top-nav-btn" to="/scan">
        Scan
      </Link>
    </div>
  );
}

export default TopNav;
