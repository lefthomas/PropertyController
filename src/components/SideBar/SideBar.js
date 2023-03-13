import "./SideBar.css";
import GlanceBox from "../GlanceBox/GlanceBox";
import { useQuery } from "@apollo/client";
import { GET_GLANCE_BOX } from "../../queries/queries";

function SideBar() {
  const { loading, error, data } = useQuery(GET_GLANCE_BOX, {
    variables: { LWH: "LWH", BSQ: "BSQ" },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div className="side-bar">
      <GlanceBox direction={"BSQ to LWH"} transferInfo={data.BSQ} />
      <GlanceBox direction={"LWH to BSQ"} transferInfo={data.LWH} />
    </div>
  );
}

export default SideBar;
