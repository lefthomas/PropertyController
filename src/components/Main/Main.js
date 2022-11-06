import "./Main.css";
import TopNav from "../TopNav/TopNav";
import LocBar from "../LocBar/LocBar";
import BSQtoLWH from "../NotBooked/NotBooked";

function Main() {
  return (
    <div className="main-div">
      <TopNav />
      <LocBar />
      <BSQtoLWH />
    </div>
  );
}

export default Main;
