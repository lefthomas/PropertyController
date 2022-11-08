import "./TopNav.css";

function TopNav() {
  return (
    <div class="top-nav">
      <a class="top-nav-active top-nav-btn" href="#transfer">
        Transfer
      </a>
      <a class="top-nav-btn" href="#hold">
        Hold
      </a>
      <a class="top-nav-btn" href="#watch">
        Watch
      </a>
      <a class="top-nav-btn" href="#scan">
        Scan
      </a>
    </div>
  );
}

export default TopNav;
