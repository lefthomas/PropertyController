import "./SideBar.css";
import GlanceBox from "../GlanceBox/GlanceBox";

function SideBar() {
  return (
    <div className="side-bar">
      <p className="side-bar-title">At a Glance</p>
      <GlanceBox direction={"BSQ to LWH"} />
      <GlanceBox direction={"LWH to BSQ"} />
    </div>
  );
}

export default SideBar;
