import HoldRequestListItem from "../HoldRequestListItem/HoldRequestListItem";
import "./HoldRequestList.css";

function HoldRequestList({ ID, destLoc }) {
  return (
    <div className="hold-request-list-border">
      <HoldRequestListItem ID={ID} destLoc={destLoc} />
    </div>
  );
}

export default HoldRequestList;
