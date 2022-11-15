import "./Main.css";
import LocBar from "../LocBar/LocBar";
import NotBooked from "../NotBooked/NotBooked";
// import TransferRunner from "../TransferRunner/TransferRunner";

function Main() {
  return (
    <div className="main-div">
      <LocBar />
      {/* <TransferRunner /> */}
      <NotBooked />
    </div>
  );
}

export default Main;
