import "./Main.css";
import LocBar from "../LocBar/LocBar";
import NotBooked from "../NotBooked/NotBooked";

function Main() {
  return (
    <div className="main-div">
      <LocBar />
      <NotBooked />
    </div>
  );
}

export default Main;
