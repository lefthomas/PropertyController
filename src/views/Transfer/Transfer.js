import "./Transfer.css";
import LocBar from "../../components/LocBar/LocBar";
import BookTransfer from "../../components/BookTransfer/BookTransfer";
import TransferRunner from "../../components/TransferRunner/TransferRunner";

function Transfer() {
  return (
    <div className="transfer-div">
      <LocBar />
      <TransferRunner />
      <BookTransfer originLoc={"BSQ"} />
    </div>
  );
}

export default Transfer;
