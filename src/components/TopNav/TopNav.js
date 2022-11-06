import "./TopNav.css";

function TopNav() {
  return (
    <div class="top-nav">
      <a class="active button" href="#transfer">
        Transfer
      </a>
      <a class="button" href="#hold">
        Hold
      </a>
      <a class="button" href="#watch">
        Watch
      </a>
      <a class="button" href="#scan">
        Scan
      </a>
    </div>
  );
}

export default TopNav;
