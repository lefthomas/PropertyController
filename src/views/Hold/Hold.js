import { useState } from "react";
import "./Hold.css";
import HoldLocBar from "./HoldLocBar/HoldLocBar";
import HoldRunner from "./HoldRunner/HoldRunner";

function Hold() {
  const [active, setActive] = useState("keepBSQ");
  return (
    <div className="hold-div">
      <HoldLocBar toggle={setActive} destLoc={active} />
      <HoldRunner destLoc={active} saleCode={"UK030123"} />
    </div>
  );
}

export default Hold;
