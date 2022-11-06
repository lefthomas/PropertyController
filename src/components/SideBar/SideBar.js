import "./SideBar.css";
import GlanceBox from "../GlanceBox/GlanceBox";

function SideBar() {
  return (
    <div className="side-bar">
      <p>At a Glance</p>
      <GlanceBox />
      <GlanceBox />
    </div>
  );
}

export default SideBar;
