import "./Transfer.css";
import LocBar from "../../components/LocBar/LocBar";
import TransferRunner from "../../components/TransferRunner/TransferRunner";
import { useState } from "react";
import BookTransfer from "../../components/BookTransfer/BookTransfer";

function Transfer() {
  const [active, setActive] = useState("BSQ");

  return (
    <div className="transfer-div">
      <LocBar toggle={setActive} originLoc={active} />
      <TransferRunner originLoc={active} />
      {active !== "Archive" && <BookTransfer originLoc={active} />}
    </div>
  );
}

export default Transfer;
