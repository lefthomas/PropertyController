import "./LocBar.css";

function LocBar(props) {
  return (
    <div className="loc-bar">
      <button
        className={
          props.originLoc === "BSQ" ? "loc-bar-btn-active" : "loc-bar-btn"
        }
        onClick={() => props.toggle("BSQ")}
      >
        BSQ to LWH
      </button>
      <button
        className={
          props.originLoc === "LWH" ? "loc-bar-btn-active" : "loc-bar-btn"
        }
        onClick={() => props.toggle("LWH")}
      >
        LWH to BSQ
      </button>
      <button
        className={
          props.originLoc === "Archive" ? "loc-bar-btn-active" : "loc-bar-btn"
        }
        onClick={() => props.toggle("Archive")}
      >
        Archive
      </button>
    </div>
  );
}

export default LocBar;
