import "./TopNav.css";

function TopNav() {
  return (
    <div className="top-nav">
      <a className="top-nav-active top-nav-btn" href="#transfer">
        Transfer
      </a>
      <a className="top-nav-btn" href="#hold">
        Hold
      </a>
      <a className="top-nav-btn" href="#watch">
        Watch
      </a>
      <a className="top-nav-btn" href="#scan">
        Scan
      </a>
    </div>
  );
}

export default TopNav;
