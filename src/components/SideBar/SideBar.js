import "./SideBar.css";
import GlanceBox from "../GlanceBox/GlanceBox";

function SideBar() {
  return (
    <div className="side-bar">
      <heading className="side-bar-title">At a Glance</heading>
      <GlanceBox direction={"BSQ to LWH"} />
      <GlanceBox direction={"LWH to BSQ"} />
    </div>
  );
}

export default SideBar;
