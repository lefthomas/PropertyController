import "./SideBar.css";
import GlanceBox from "../GlanceBox/GlanceBox";
import { gql, useQuery } from "@apollo/client";

const GET_GLANCE_BOX = gql`
  query GetGlanceBox($LWH: String, $BSQ: String) {
    LWH: getGlanceBox(originLocation: $LWH) {
      additionsDate
      coordinator
      shipper
      _id
    }
    BSQ: getGlanceBox(originLocation: $BSQ) {
      additionsDate
      coordinator
      shipper
      _id
    }
  }
`;

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
