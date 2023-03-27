import "./LocBar.css";

function LocBar({ originLoc, toggle }) {
  return (
    <div className="loc-bar">
      <button
        className={originLoc === "BSQ" ? "loc-bar-btn-active" : "loc-bar-btn"}
        onClick={() => toggle("BSQ")}
      >
        BSQ to LWH
      </button>
      <button
        className={originLoc === "LWH" ? "loc-bar-btn-active" : "loc-bar-btn"}
        onClick={() => toggle("LWH")}
      >
        LWH to BSQ
      </button>
      <button
        className={
          originLoc === "Archive" ? "loc-bar-btn-active" : "loc-bar-btn"
        }
        onClick={() => toggle("Archive")}
      >
        Archive
      </button>
    </div>
  );
}

export default LocBar;
