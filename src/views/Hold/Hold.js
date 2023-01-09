import { useState } from "react";
import "./Hold.css";
import HoldLocBar from "./HoldLocBar/HoldLocBar";
import HoldRunner from "./HoldRunner/HoldRunner";

function Hold() {
  const [active, setActive] = useState("BSQ");
  return (
    <div className="hold-div">
      <h1 className="hold-div-title">Request Holds for UK030123</h1>
      <HoldLocBar toggle={setActive} originLoc={active} />
      <HoldRunner holdLoc="Keep at BSQ" originLoc={active} />
    </div>
  );
}

export default Hold;
