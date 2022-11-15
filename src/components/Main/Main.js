import "./Main.css";
import LocBar from "../LocBar/LocBar";
import BookTransfer from "../BookTransfer/BookTransfer";
import TransferRunner from "../TransferRunner/TransferRunner";

function Main() {
  return (
    <div className="main-div">
      <LocBar />
      <TransferRunner />
      <BookTransfer originLoc={"LWH"} />
    </div>
  );
}

export default Main;
