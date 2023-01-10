import "./HoldLocBar.css";

function HoldLocBar({ destLoc, toggle }) {
  return (
    <div className="hold-loc-bar">
      <button
        className={
          destLoc === "keepBSQ" ? "hold-loc-bar-btn-active" : "hold-loc-bar-btn"
        }
        onClick={() => toggle("keepBSQ")}
      >
        Keep at BSQ
      </button>
      <button
        className={
          destLoc === "keepLWH" ? "hold-loc-bar-btn-active" : "hold-loc-bar-btn"
        }
        onClick={() => toggle("keepLWH")}
      >
        Send to LWH
      </button>
    </div>
  );
}

export default HoldLocBar;
