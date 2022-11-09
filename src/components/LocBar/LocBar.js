import "./LocBar.css";

function LocBar() {
  return (
    <div className="loc-bar">
      <a className="loc-bar-btn loc-bar-btn-active" href="#BSQto">
        BSQ to LWH
      </a>
      <a className="loc-bar-btn" href="#LWHto">
        LWH to BSQ
      </a>
      <a className="loc-bar-btn" href="#Archive">
        Archive
      </a>
    </div>
  );
}

export default LocBar;
