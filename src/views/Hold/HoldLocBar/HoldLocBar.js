import "./HoldLocBar.css";

function HoldLocBar(props) {
  return (
    <div className="hold-loc-bar">
      <button
        className={
          props.originLoc === "BSQ"
            ? "hold-loc-bar-btn-active"
            : "hold-loc-bar-btn"
        }
        onClick={() => props.toggle("BSQ")}
      >
        Keep at BSQ
      </button>
      <button
        className={
          props.originLoc === "LWH"
            ? "hold-loc-bar-btn-active"
            : "hold-loc-bar-btn"
        }
        onClick={() => props.toggle("LWH")}
      >
        Send to LWH
      </button>
    </div>
  );
}

export default HoldLocBar;
